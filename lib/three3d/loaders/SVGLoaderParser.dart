part of three_loaders;

class SVGLoaderParser {
  //
  List<ShapePath> paths = [];
  var stylesheets = {};

  var transformStack = [];

  var tempTransform0 = new Matrix3();
  var tempTransform1 = new Matrix3();
  var tempTransform2 = new Matrix3();
  var tempTransform3 = new Matrix3();
  var tempV2 = new Vector2(null, null);
  var tempV3 = new Vector3.init();

  var currentTransform = new Matrix3();

  
  String defaultUnit = "px";
  num defaultDPI = 90;

  var xml;

  // Units

  var units = ['mm', 'cm', 'in', 'pt', 'pc', 'px'];

  // Conversion: [ fromUnit ][ toUnit ] (-1 means dpi dependent)
  var unitConversion = {
    "mm": {
      'mm': 1,
      'cm': 0.1,
      'in': 1 / 25.4,
      'pt': 72 / 25.4,
      'pc': 6 / 25.4,
      'px': -1
    },
    "cm": {
      'mm': 10,
      'cm': 1,
      'in': 1 / 2.54,
      'pt': 72 / 2.54,
      'pc': 6 / 2.54,
      'px': -1
    },
    "in": {'mm': 25.4, 'cm': 2.54, 'in': 1, 'pt': 72, 'pc': 6, 'px': -1},
    "pt": {
      'mm': 25.4 / 72,
      'cm': 2.54 / 72,
      'in': 1 / 72,
      'pt': 1,
      'pc': 6 / 72,
      'px': -1
    },
    "pc": {
      'mm': 25.4 / 6,
      'cm': 2.54 / 6,
      'in': 1 / 6,
      'pt': 72 / 6,
      'pc': 1,
      'px': -1
    },
    "px": {'px': 1}
  };

  SVGLoaderParser(String text, {num defaultDPI = 90, String defaultUnit = "px"}) {
    
    xml = parseXmlDocument(text); // application/xml

    this.defaultDPI = defaultDPI;
    this.defaultUnit = defaultUnit;
  }

  SVGLoaderParser.parser() {}

  // Function parse =========== start
  Map<String, dynamic> parse(text) {
    parseNode(xml.documentElement, {
      "fill": '#000',
      "fillOpacity": 1,
      "strokeOpacity": 1,
      "strokeWidth": 1,
      "strokeLineJoin": 'miter',
      "strokeLineCap": 'butt',
      "strokeMiterLimit": 4
    });

    var data = {"paths": paths, "xml": xml.documentElement};

    // console.log( paths );
    return data;
  }

  parseFloatWithUnits(string) {

    if(string == null) {
      return null;
    }

    var theUnit = 'px';

    // print("SvgLoader.parseFloatWithUnits ${string} runtimeType: ${string.runtimeType} ");

    if (string.runtimeType == String) {
      for (var i = 0, n = units.length; i < n; i++) {
        var u = units[i];

        if (string.endsWith(u)) {
          theUnit = u;
          string = string.substring(0, string.length - u.length);
          break;
        }
      }
    }

    num scale;

    if (theUnit == 'px' && defaultUnit != 'px') {
      // Conversion scale from  pixels to inches, then to default units

      scale = unitConversion["in"]![defaultUnit]! / defaultDPI;
    } else {
      scale = unitConversion[theUnit]![defaultUnit]!;

      if (scale < 0) {
        // Conversion scale to pixels

        scale = unitConversion[theUnit]!['in']! * defaultDPI;
      }
    }


    String _str = string;
    // if(_str.startsWith("-.")) {
    //   _str = _str.replaceFirst("-.", "-0.");
    // }

    List<String> _strs = _str.split(".");

    if(_strs.length >= 3) {
      _strs = _strs.sublist(0, 2);

      _str = _strs.join(".");
    }

    // print(" string: ${_str} ");

    return scale * num.parse("${_str}");
  }

  parseFloats(String string) {
   
    RegExp reg = RegExp(r"[\s,]+|(?=\s?[+\-])");
    var array = string.split(reg);

    List<num> array2 = [];

    // var array = string.split( /[\s,]+|(?=\s?[+\-])/ );

    for (var i = 0; i < array.length; i++) {
      var number = array[i];

      // Handle values like 48.6037.7.8
      // TODO Find a regex for this

      if (number.indexOf('.') != number.lastIndexOf('.')) {
        var split = number.split('.');

        for (var s = 2; s < split.length; s++) {
          // array.splice( i + s - 1, 0, '0.' + split[ s ] );
          splice(array, i + s - 1, 0, '0.' + split[s]);
        }
      }

      // array[i] = parseFloatWithUnits(number);
      array2.add(parseFloatWithUnits(number));
    }



    return array2;
  }

  parseNodeTransform(node) {
    var transform = new Matrix3();
    var currentTransform = tempTransform0;

    if (node.nodeName == 'use' &&
        (node.hasAttribute('x') || node.hasAttribute('y'))) {
      var tx = parseFloatWithUnits(node.getAttribute('x'));
      var ty = parseFloatWithUnits(node.getAttribute('y'));

      transform.translate(tx, ty);
    }

    if (node.hasAttribute('transform')) {
      var transformsTexts = node.getAttribute('transform').split(')');

      for (var tIndex = transformsTexts.length - 1; tIndex >= 0; tIndex--) {
        var transformText = transformsTexts[tIndex].trim();

        if (transformText == '') continue;

        var openParPos = transformText.indexOf('(');
        var closeParPos = transformText.length;

        if (openParPos > 0 && openParPos < closeParPos) {
          var transformType = substr(transformText, 0, openParPos);

          var floatStr = substr(transformText, openParPos + 1, closeParPos - openParPos - 1);

          var array = parseFloats(floatStr);

          currentTransform.identity();

          switch (transformType) {
            case 'translate':
              if (array.length >= 1) {
                var tx = array[0];
                var ty = tx;

                if (array.length >= 2) {
                  ty = array[1];
                }

                currentTransform.translate(tx, ty);
              }

              break;

            case 'rotate':
              if (array.length >= 1) {
                double angle = 0;
                double cx = 0;
                double cy = 0;

                // Angle
                angle = -array[0] * Math.PI / 180.0;

                if (array.length >= 3) {
                  // Center x, y
                  cx = array[1];
                  cy = array[2];
                }

                // Rotate around center (cx, cy)
                tempTransform1.identity().translate(-cx, -cy);
                tempTransform2.identity().rotate(angle);
                tempTransform3.multiplyMatrices(tempTransform2, tempTransform1);
                tempTransform1.identity().translate(cx, cy);
                currentTransform.multiplyMatrices(
                    tempTransform1, tempTransform3);
              }

              break;

            case 'scale':
              if (array.length >= 1) {
                var scaleX = array[0];
                var scaleY = scaleX;

                if (array.length >= 2) {
                  scaleY = array[1];
                }

                currentTransform.scale(scaleX, scaleY);
              }

              break;

            case 'skewX':
              if (array.length == 1) {
                currentTransform.set(
                    1, Math.tan(array[0] * Math.PI / 180), 0, 0, 1, 0, 0, 0, 1);
              }

              break;

            case 'skewY':
              if (array.length == 1) {
                currentTransform.set(
                    1, 0, 0, Math.tan(array[0] * Math.PI / 180), 1, 0, 0, 0, 1);
              }

              break;

            case 'matrix':
              if (array.length == 6) {
                currentTransform.set(array[0], array[2], array[4], array[1],
                    array[3], array[5], 0, 0, 1);
              }

              break;
          }
        }

        transform.premultiply(currentTransform);
      }
    }

    return transform;
  }

  // Transforms

  getNodeTransform(node) {
    if (!(node.hasAttribute('transform') ||
        (node.nodeName == 'use' &&
            (node.hasAttribute('x') || node.hasAttribute('y'))))) {
      return null;
    }

    var transform = parseNodeTransform(node);

    if (transformStack.length > 0) {
      transform.premultiply(transformStack[transformStack.length - 1]);
    }

    currentTransform.copy(transform);
    transformStack.add(transform);

    return transform;
  }

  parseCSSStylesheet(node) {
    if (!node.sheet || !node.sheet.cssRules || !node.sheet.cssRules.length)
      return;

    for (var i = 0; i < node.sheet.cssRules.length; i++) {
      var stylesheet = node.sheet.cssRules[i];

      if (stylesheet.type != 1) continue;

      RegExp _reg = RegExp(r",", multiLine: true);
      var selectorList =
          stylesheet.selectorText.split(_reg).map((i) => i.trim());

      // var selectorList = stylesheet.selectorText
      // 	.split( /,/gm )
      // 	.filter( Boolean )
      // 	.map( i => i.trim() );

      for (var j = 0; j < selectorList.length; j++) {
        if (stylesheets[selectorList[j]] == null) {
          stylesheets[selectorList[j]] = {};
        }
        stylesheets[selectorList[j]].addAll(stylesheet.style);

        // stylesheets[ selectorList[ j ] ] = Object.assign(
        // 	stylesheets[ selectorList[ j ] ] || {},
        // 	stylesheet.style
        // );

      }
    }
  }

  parseStyle(node, style) {
    // style = Object.assign( {}, style );
    // clone style
    Map<String, dynamic> style2 = Map<String, dynamic>();
    style2.addAll(style);

    var stylesheetStyles = {};

    if (node.hasAttribute('class')) {
      var _reg = RegExp(r"\s");
      var classSelectors = node
          .getAttribute('class')
          .split(_reg)
          // .filter( Boolean )
          .map((i) => i.trim()).toList();

      for (var i = 0; i < classSelectors.length; i++) {
        // stylesheetStyles = Object.assign( stylesheetStyles, stylesheets[ '.' + classSelectors[ i ] ] );
        stylesheetStyles.addAll(stylesheets['.' + classSelectors[i]] ?? {});
      }
    }

    if (node.hasAttribute('id')) {
      // stylesheetStyles = Object.assign( stylesheetStyles, stylesheets[ '#' + node.getAttribute( 'id' ) ] );

      stylesheetStyles.addAll(stylesheets['#' + node.getAttribute('id')] ?? {});
    }

    Function addStyle = (svgName, jsName, [adjustFunction]) {
      if (adjustFunction == null)
        adjustFunction = (v) {
          if (v.startsWith('url'))
            print('SVGLoader: url access in attributes is not implemented.');

          return v;
        };

      if (node.hasAttribute(svgName))
        style2[jsName] = adjustFunction(node.getAttribute(svgName));
      if (stylesheetStyles[svgName] != null)
        style2[jsName] = adjustFunction(stylesheetStyles[svgName]);

      if (node.style != null) {
        var _style = node.style;
        var _value = _style.getPropertyValue(svgName);
        if(_value != "") {
          // print("svgName: ${svgName} value: ${_value} ");
          style2[jsName] = adjustFunction(_value);
        }
      }
        
    };

    Function clamp = (v) {
      return Math.max(0, Math.min(1, parseFloatWithUnits(v)));
    };

    Function positive = (v) {
      return Math.max(0, parseFloatWithUnits(v));
    };

    addStyle('fill', 'fill');
    addStyle('fill-opacity', 'fillOpacity', clamp);
    addStyle('opacity', 'opacity', clamp);
    addStyle('stroke', 'stroke');
    addStyle('stroke-opacity', 'strokeOpacity', clamp);
    addStyle('stroke-width', 'strokeWidth', positive);
    addStyle('stroke-linejoin', 'strokeLineJoin');
    addStyle('stroke-linecap', 'strokeLineCap');
    addStyle('stroke-miterlimit', 'strokeMiterLimit', positive);
    addStyle('visibility', 'visibility');

    return style2;
  }

  // http://www.w3.org/TR/SVG11/implnote.html#PathElementImplementationNotes

  getReflection(a, b) {
    return a - (b - a);
  }

  svgAngle(ux, uy, vx, vy) {
    var dot = ux * vx + uy * vy;
    var len = Math.sqrt(ux * ux + uy * uy) * Math.sqrt(vx * vx + vy * vy);
    var ang = Math.acos(Math.max(
        -1,
        Math.min(
            1,
            dot /
                len))); // floating point precision, slightly over values appear
    if ((ux * vy - uy * vx) < 0) ang = -ang;
    return ang;
  }

  /**
		 * https://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes
		 * https://mortoray.com/2017/02/16/rendering-an-svg-elliptical-arc-as-bezier-curves/ Appendix: Endpoint to center arc conversion
		 * From
		 * rx ry x-axis-rotation large-arc-flag sweep-flag x y
		 * To
		 * aX, aY, xRadius, yRadius, aStartAngle, aEndAngle, aClockwise, aRotation
		 */

  parseArcCommand(
      path, rx, ry, x_axis_rotation, large_arc_flag, sweep_flag, start, end) {
    if (rx == 0 || ry == 0) {
      // draw a line if either of the radii == 0
      path.lineTo(end.x, end.y);
      return;
    }

    x_axis_rotation = x_axis_rotation * Math.PI / 180;

    // Ensure radii are positive
    rx = Math.abs(rx);
    ry = Math.abs(ry);

    // Compute (x1', y1')
    var dx2 = (start.x - end.x) / 2.0;
    var dy2 = (start.y - end.y) / 2.0;
    var x1p = Math.cos(x_axis_rotation) * dx2 + Math.sin(x_axis_rotation) * dy2;
    var y1p =
        -Math.sin(x_axis_rotation) * dx2 + Math.cos(x_axis_rotation) * dy2;

    // Compute (cx', cy')
    var rxs = rx * rx;
    var rys = ry * ry;
    var x1ps = x1p * x1p;
    var y1ps = y1p * y1p;

    // Ensure radii are large enough
    var cr = x1ps / rxs + y1ps / rys;

    if (cr > 1) {
      // scale up rx,ry equally so cr == 1
      var s = Math.sqrt(cr);
      rx = s * rx;
      ry = s * ry;
      rxs = rx * rx;
      rys = ry * ry;
    }

    var dq = (rxs * y1ps + rys * x1ps);
    var pq = (rxs * rys - dq) / dq;
    var q = Math.sqrt(Math.max(0, pq));
    if (large_arc_flag == sweep_flag) q = -q;
    var cxp = q * rx * y1p / ry;
    var cyp = -q * ry * x1p / rx;

    // Step 3: Compute (cx, cy) from (cx', cy')
    var cx = Math.cos(x_axis_rotation) * cxp -
        Math.sin(x_axis_rotation) * cyp +
        (start.x + end.x) / 2;
    var cy = Math.sin(x_axis_rotation) * cxp +
        Math.cos(x_axis_rotation) * cyp +
        (start.y + end.y) / 2;

    // Step 4: Compute θ1 and Δθ
    var theta = svgAngle(1, 0, (x1p - cxp) / rx, (y1p - cyp) / ry);
    var delta = svgAngle((x1p - cxp) / rx, (y1p - cyp) / ry, (-x1p - cxp) / rx,
            (-y1p - cyp) / ry) %
        (Math.PI * 2);

    path.currentPath.absellipse(
        cx, cy, rx, ry, theta, theta + delta, sweep_flag == 0, x_axis_rotation);
  }

  ShapePath parsePath(String d) {
    var path = new ShapePath();

    var point = new Vector2(null, null);
    var control = new Vector2(null, null);

    var firstPoint = new Vector2(null, null);
    var isFirstPoint = true;
    var doSetFirstPoint = false;

    var _reg = RegExp(r"[a-df-z][^a-df-z]*", caseSensitive: false);
    var commands = _reg.allMatches(d);

    // var commands = d.match( /[a-df-z][^a-df-z]*/ig );

    commands.forEach((item) {
      var command = item.group(0)!;


      var type = charAt(command, 0);
      var data = substr(command, 1).trim();

      if (isFirstPoint == true) {
        doSetFirstPoint = true;
        isFirstPoint = false;
      }

      switch (type) {
        case 'M':
          var numbers = parseFloats(data);
          for (var j = 0, jl = numbers.length; j < jl; j += 2) {
            point.x = numbers[j + 0];
            point.y = numbers[j + 1];
            control.x = point.x;
            control.y = point.y;

            if (j == 0) {
              path.moveTo(point.x, point.y);
            } else {
              path.lineTo(point.x, point.y);
            }

            if (j == 0 && doSetFirstPoint == true) firstPoint.copy(point);
          }

          break;

        case 'H':
          var numbers = parseFloats(data);

          for (var j = 0, jl = numbers.length; j < jl; j++) {
            point.x = numbers[j];
            control.x = point.x;
            control.y = point.y;
            path.lineTo(point.x, point.y);

            if (j == 0 && doSetFirstPoint == true) firstPoint.copy(point);
          }

          break;

        case 'V':
          var numbers = parseFloats(data);

          for (var j = 0, jl = numbers.length; j < jl; j++) {
            point.y = numbers[j];
            control.x = point.x;
            control.y = point.y;
            path.lineTo(point.x, point.y);

            if (j == 0 && doSetFirstPoint == true) firstPoint.copy(point);
          }

          break;

        case 'L':
          var numbers = parseFloats(data);

          for (var j = 0, jl = numbers.length; j < jl; j += 2) {
            point.x = numbers[j + 0];
            point.y = numbers[j + 1];
            control.x = point.x;
            control.y = point.y;
            path.lineTo(point.x, point.y);

            if (j == 0 && doSetFirstPoint == true) firstPoint.copy(point);
          }

          break;

        case 'C':
          var numbers = parseFloats(data);

          for (var j = 0, jl = numbers.length; j < jl; j += 6) {
            path.bezierCurveTo(numbers[j + 0], numbers[j + 1], numbers[j + 2],
                numbers[j + 3], numbers[j + 4], numbers[j + 5]);
            control.x = numbers[j + 2];
            control.y = numbers[j + 3];
            point.x = numbers[j + 4];
            point.y = numbers[j + 5];

            if (j == 0 && doSetFirstPoint == true) firstPoint.copy(point);
          }

          break;

        case 'S':
          var numbers = parseFloats(data);

          for (var j = 0, jl = numbers.length; j < jl; j += 4) {
            path.bezierCurveTo(
                getReflection(point.x, control.x),
                getReflection(point.y, control.y),
                numbers[j + 0],
                numbers[j + 1],
                numbers[j + 2],
                numbers[j + 3]);
            control.x = numbers[j + 0];
            control.y = numbers[j + 1];
            point.x = numbers[j + 2];
            point.y = numbers[j + 3];

            if (j == 0 && doSetFirstPoint == true) firstPoint.copy(point);
          }

          break;

        case 'Q':
          var numbers = parseFloats(data);

          for (var j = 0, jl = numbers.length; j < jl; j += 4) {
            path.quadraticCurveTo(
                numbers[j + 0], numbers[j + 1], numbers[j + 2], numbers[j + 3]);
            control.x = numbers[j + 0];
            control.y = numbers[j + 1];
            point.x = numbers[j + 2];
            point.y = numbers[j + 3];

            if (j == 0 && doSetFirstPoint == true) firstPoint.copy(point);
          }

          break;

        case 'T':
          var numbers = parseFloats(data);

          for (var j = 0, jl = numbers.length; j < jl; j += 2) {
            var rx = getReflection(point.x, control.x);
            var ry = getReflection(point.y, control.y);
            path.quadraticCurveTo(rx, ry, numbers[j + 0], numbers[j + 1]);
            control.x = rx;
            control.y = ry;
            point.x = numbers[j + 0];
            point.y = numbers[j + 1];

            if (j == 0 && doSetFirstPoint == true) firstPoint.copy(point);
          }

          break;

        case 'A':
          var numbers = parseFloats(data);

          for (var j = 0, jl = numbers.length; j < jl; j += 7) {
            // skip command if start point == end point
            if (numbers[j + 5] == point.x && numbers[j + 6] == point.y)
              continue;

            var start = point.clone();
            point.x = numbers[j + 5];
            point.y = numbers[j + 6];
            control.x = point.x;
            control.y = point.y;
            parseArcCommand(path, numbers[j], numbers[j + 1], numbers[j + 2],
                numbers[j + 3], numbers[j + 4], start, point);

            if (j == 0 && doSetFirstPoint == true) firstPoint.copy(point);
          }

          break;

        case 'm':
          var numbers = parseFloats(data);

          for (var j = 0, jl = numbers.length; j < jl; j += 2) {
            point.x += numbers[j + 0];
            point.y += numbers[j + 1];
            control.x = point.x;
            control.y = point.y;

            if (j == 0) {
              path.moveTo(point.x, point.y);
            } else {
              path.lineTo(point.x, point.y);
            }

            if (j == 0 && doSetFirstPoint == true) firstPoint.copy(point);
          }

          break;

        case 'h':
          var numbers = parseFloats(data);

          for (var j = 0, jl = numbers.length; j < jl; j++) {
            point.x += numbers[j];
            control.x = point.x;
            control.y = point.y;
            path.lineTo(point.x, point.y);

            if (j == 0 && doSetFirstPoint == true) firstPoint.copy(point);
          }

          break;

        case 'v':
          var numbers = parseFloats(data);

          for (var j = 0, jl = numbers.length; j < jl; j++) {
            point.y += numbers[j];
            control.x = point.x;
            control.y = point.y;
            path.lineTo(point.x, point.y);

            if (j == 0 && doSetFirstPoint == true) firstPoint.copy(point);
          }

          break;

        case 'l':
          var numbers = parseFloats(data);

          for (var j = 0, jl = numbers.length; j < jl; j += 2) {
            point.x += numbers[j + 0];
            point.y += numbers[j + 1];
            control.x = point.x;
            control.y = point.y;
            path.lineTo(point.x, point.y);

            if (j == 0 && doSetFirstPoint == true) firstPoint.copy(point);
          }

          break;

        case 'c':
          var numbers = parseFloats(data);

          for (var j = 0, jl = numbers.length; j < jl; j += 6) {
            path.bezierCurveTo(
                point.x + numbers[j + 0],
                point.y + numbers[j + 1],
                point.x + numbers[j + 2],
                point.y + numbers[j + 3],
                point.x + numbers[j + 4],
                point.y + numbers[j + 5]);
            control.x = point.x + numbers[j + 2];
            control.y = point.y + numbers[j + 3];
            point.x += numbers[j + 4];
            point.y += numbers[j + 5];

            if (j == 0 && doSetFirstPoint == true) firstPoint.copy(point);
          }

          break;

        case 's':
          var numbers = parseFloats(data);

          for (var j = 0, jl = numbers.length; j < jl; j += 4) {
            path.bezierCurveTo(
                getReflection(point.x, control.x),
                getReflection(point.y, control.y),
                point.x + numbers[j + 0],
                point.y + numbers[j + 1],
                point.x + numbers[j + 2],
                point.y + numbers[j + 3]);
            control.x = point.x + numbers[j + 0];
            control.y = point.y + numbers[j + 1];
            point.x += numbers[j + 2];
            point.y += numbers[j + 3];

            if (j == 0 && doSetFirstPoint == true) firstPoint.copy(point);
          }

          break;

        case 'q':
          var numbers = parseFloats(data);

          for (var j = 0, jl = numbers.length; j < jl; j += 4) {
            path.quadraticCurveTo(
                point.x + numbers[j + 0],
                point.y + numbers[j + 1],
                point.x + numbers[j + 2],
                point.y + numbers[j + 3]);
            control.x = point.x + numbers[j + 0];
            control.y = point.y + numbers[j + 1];
            point.x += numbers[j + 2];
            point.y += numbers[j + 3];

            if (j == 0 && doSetFirstPoint == true) firstPoint.copy(point);
          }

          break;

        case 't':
          var numbers = parseFloats(data);

          for (var j = 0, jl = numbers.length; j < jl; j += 2) {
            var rx = getReflection(point.x, control.x);
            var ry = getReflection(point.y, control.y);
            path.quadraticCurveTo(
                rx, ry, point.x + numbers[j + 0], point.y + numbers[j + 1]);
            control.x = rx;
            control.y = ry;
            point.x = point.x + numbers[j + 0];
            point.y = point.y + numbers[j + 1];

            if (j == 0 && doSetFirstPoint == true) firstPoint.copy(point);
          }

          break;

        case 'a':
          var numbers = parseFloats(data);

          for (var j = 0, jl = numbers.length; j < jl; j += 7) {
            // skip command if no displacement
            if (numbers[j + 5] == 0 && numbers[j + 6] == 0) continue;

            var start = point.clone();
            point.x += numbers[j + 5];
            point.y += numbers[j + 6];
            control.x = point.x;
            control.y = point.y;
            parseArcCommand(path, numbers[j], numbers[j + 1], numbers[j + 2],
                numbers[j + 3], numbers[j + 4], start, point);

            if (j == 0 && doSetFirstPoint == true) firstPoint.copy(point);
          }

          break;

        case 'Z':
        case 'z':

          // print("path.currentPath: ${path.currentPath} ");

          path.currentPath.autoClose = true;

          if (path.currentPath.curves.length > 0) {
            // Reset point to beginning of Path
            point.copy(firstPoint);
            path.currentPath.currentPoint.copy(point);
            isFirstPoint = true;
          }

          break;

        default:
          print("SvgLoader.parsePathNode command is not support ... ");
          print(command);
      }

      // console.log( type, parseFloats( data ), parseFloats( data ).length  )

      doSetFirstPoint = false;
    });

    return path;
  }

  parsePathNode(node) {
    var d = node.getAttribute('d');
    return parsePath(d);
  }

  /*
		* According to https://www.w3.org/TR/SVG/shapes.html#RectElementRXAttribute
		* rounded corner should be rendered to elliptical arc, but bezier curve does the job well enough
		*/
  parseRectNode(node) {
    var x = parseFloatWithUnits(node.getAttribute('x') ?? 0);
    var y = parseFloatWithUnits(node.getAttribute('y') ?? 0);
    var rx = parseFloatWithUnits(node.getAttribute('rx') ?? 0);
    var ry = parseFloatWithUnits(node.getAttribute('ry') ?? 0);
    var w = parseFloatWithUnits(node.getAttribute('width'));
    var h = parseFloatWithUnits(node.getAttribute('height'));

    var path = new ShapePath();
    path.moveTo(x + 2 * rx, y);
    path.lineTo(x + w - 2 * rx, y);
    if (rx != 0 || ry != 0)
      path.bezierCurveTo(x + w, y, x + w, y, x + w, y + 2 * ry);
    path.lineTo(x + w, y + h - 2 * ry);
    if (rx != 0 || ry != 0)
      path.bezierCurveTo(x + w, y + h, x + w, y + h, x + w - 2 * rx, y + h);
    path.lineTo(x + 2 * rx, y + h);

    if (rx != 0 || ry != 0) {
      path.bezierCurveTo(x, y + h, x, y + h, x, y + h - 2 * ry);
    }

    path.lineTo(x, y + 2 * ry);

    if (rx != 0 || ry != 0) {
      path.bezierCurveTo(x, y, x, y, x + 2 * rx, y);
    }

    return path;
  }

  parsePolygonNode(node) {
    print("SVGLoader.parsePolygonNode todo test ");
    // var regex = /(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g;
    var regex = RegExp(r"(-?[\d\.?]+)[,|\s](-?[\d\.?]+)");
    var path = new ShapePath();
    var index = 0;

    // Function iterator = (match, a, b) {
    //   var x = parseFloatWithUnits(a);
    //   var y = parseFloatWithUnits(b);

    //   if (index == 0) {
    //     path.moveTo(x, y);
    //   } else {
    //     path.lineTo(x, y);
    //   }

    //   index++;
    // };
    // node.getAttribute('points').replace(regex, iterator);

    String _points = node.getAttribute('points');
    var matches = regex.allMatches(_points);

    // print(" _points: ${_points} ");
    
    for(var match in matches) {
      
      var a = match.group(1);
      var b = match.group(2);

      // print("index: ${index} a: ${a} b: ${b} ");

      var x = parseFloatWithUnits(a);
      var y = parseFloatWithUnits(b);

      if (index == 0) {
        path.moveTo(x, y);
      } else {
        path.lineTo(x, y);
      }

      index++;
    }

    path.currentPath.autoClose = true;

    return path;
  }

  ShapePath parsePolylineNode(node) {
    print("SVGLoader.parsePolylineNode todo  ");

    // var regex = /(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g;
    var regex = RegExp(r"(-?[\d\.?]+)[,|\s](-?[\d\.?]+)");

    var path = new ShapePath();

    var index = 0;

    Function iterator = (match, a, b) {
      var x = parseFloatWithUnits(a);
      var y = parseFloatWithUnits(b);

      if (index == 0) {
        path.moveTo(x, y);
      } else {
        path.lineTo(x, y);
      }

      index++;
    };

    node.getAttribute('points').replace(regex, iterator);

    path.currentPath.autoClose = false;

    return path;
  }

  parseCircleNode(node) {
    var x = parseFloatWithUnits(node.getAttribute('cx'));
    var y = parseFloatWithUnits(node.getAttribute('cy'));
    var r = parseFloatWithUnits(node.getAttribute('r'));

    var subpath = new Path(null);
    subpath.absarc(x, y, r, 0, Math.PI * 2, null);

    var path = new ShapePath();
    path.subPaths.add(subpath);

    return path;
  }

  ShapePath parseEllipseNode(node) {
    var x = parseFloatWithUnits(node.getAttribute('cx'));
    var y = parseFloatWithUnits(node.getAttribute('cy'));
    var rx = parseFloatWithUnits(node.getAttribute('rx'));
    var ry = parseFloatWithUnits(node.getAttribute('ry'));

    var subpath = new Path(null);
    subpath.absellipse(x, y, rx, ry, 0, Math.PI * 2, null, null);

    var path = new ShapePath();
    path.subPaths.add(subpath);

    return path;
  }

  ShapePath parseLineNode(node) {
    var x1 = parseFloatWithUnits(node.getAttribute('x1'));
    var y1 = parseFloatWithUnits(node.getAttribute('y1'));
    var x2 = parseFloatWithUnits(node.getAttribute('x2'));
    var y2 = parseFloatWithUnits(node.getAttribute('y2'));

    var path = new ShapePath();
    path.moveTo(x1, y1);
    path.lineTo(x2, y2);
    path.currentPath.autoClose = false;

    return path;
  }

  isTransformRotated(m) {
    return m.elements[1] != 0 || m.elements[3] != 0;
  }

  getTransformScaleX(m) {
    var te = m.elements;
    return Math.sqrt(te[0] * te[0] + te[1] * te[1]);
  }

  getTransformScaleY(m) {
    var te = m.elements;
    return Math.sqrt(te[3] * te[3] + te[4] * te[4]);
  }

  transformPath(path, m) {
    Function transfVec2 = (v2) {
      tempV3.set(v2.x, v2.y, 1).applyMatrix3(m);

      v2.set(tempV3.x, tempV3.y);
    };

    var isRotated = isTransformRotated(m);

    var subPaths = path.subPaths;

    for (var i = 0, n = subPaths.length; i < n; i++) {
      var subPath = subPaths[i];
      var curves = subPath.curves;

      for (var j = 0; j < curves.length; j++) {
        var curve = curves[j];

        if (curve.isLineCurve) {
          transfVec2(curve.v1);
          transfVec2(curve.v2);
        } else if (curve.isCubicBezierCurve) {
          transfVec2(curve.v0);
          transfVec2(curve.v1);
          transfVec2(curve.v2);
          transfVec2(curve.v3);
        } else if (curve.isQuadraticBezierCurve) {
          transfVec2(curve.v0);
          transfVec2(curve.v1);
          transfVec2(curve.v2);
        } else if (curve.isEllipseCurve) {
          if (isRotated) {
            print(
                'SVGLoader: Elliptic arc or ellipse rotation or skewing is not implemented.');
          }

          tempV2.set(curve.aX, curve.aY);
          transfVec2(tempV2);
          curve.aX = tempV2.x;
          curve.aY = tempV2.y;

          curve.xRadius *= getTransformScaleX(m);
          curve.yRadius *= getTransformScaleY(m);
        }
      }
    }
  }


	

  parseNode(node, style) {
    if (node.nodeType != 1) return;

    var transform = getNodeTransform(node);

    var traverseChildNodes = true;

    var path = null;

    switch (node.nodeName) {
      case 'svg':
        break;

      case 'style':
        parseCSSStylesheet(node);
        break;

      case 'g':
        style = parseStyle(node, style);
        break;

      case 'path':
        style = parseStyle(node, style);
        if (node.hasAttribute('d')) {
          path = parsePathNode(node);
        }
        break;

      case 'rect':
        style = parseStyle(node, style);
        path = parseRectNode(node);
        break;

      case 'polygon':
        style = parseStyle(node, style);
        path = parsePolygonNode(node);
        break;

      case 'polyline':
        style = parseStyle(node, style);
        path = parsePolylineNode(node);
        break;

      case 'circle':
        style = parseStyle(node, style);
        path = parseCircleNode(node);
        break;

      case 'ellipse':
        style = parseStyle(node, style);
        path = parseEllipseNode(node);
        break;

      case 'line':
        style = parseStyle(node, style);
        path = parseLineNode(node);
        break;

      case 'defs':
        traverseChildNodes = false;
        break;

      case 'use':
        style = parseStyle(node, style);
        var usedNodeId = node.href.baseVal.substring(1);
        var usedNode = node.viewportElement.getElementById(usedNodeId);
        if (usedNode != null) {
          parseNode(usedNode, style);
        } else {
          print(
              "SVGLoader: 'use node' references non-existent node id: ${usedNodeId}");
        }

        break;

      default:
      // console.log( node );

    }

    if (path != null) {
      if (style["fill"] != null && style["fill"] != 'none') {
        path.color.setStyle(style["fill"]);
      }

      transformPath(path, currentTransform);

      paths.add(path);

      path.userData = {"node": node, "style": style};
    }

    if (traverseChildNodes) {
      var nodes = node.childNodes;

      for (var i = 0; i < nodes.length; i++) {
        parseNode(nodes[i], style);
      }
    }

    if (transform != null) {
      transformStack.removeLast();

      if (transformStack.length > 0) {
        currentTransform.copy(transformStack[transformStack.length - 1]);
      } else {
        currentTransform.identity();
      }
    }
  }
}
