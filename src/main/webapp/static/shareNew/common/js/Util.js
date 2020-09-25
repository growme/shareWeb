var todayDay = "";

function $id(objid) {
    return document.getElementById(objid);
}

function $name(objname) {
    return document.getElementsByName(objname);
}

function Util() {
}

/**
 * ��ʼ��������Ԥ��ͼdiv��������
 * @param selector
 */
Util.picSquareInit_batch = function (selector) {
    var squares = $(selector);
    for (var i = 0; i < squares.length; i++) {
        Util.picSquareInit($(squares[i]));
    }
};
/**
 * ��ʼ��������Ԥ��ͼdiv
 * @param $picDiv
 */
Util.picSquareInit = function ($picDiv) {
    $picDiv.css("overflow", "hidden");
    $picDiv.height($picDiv.width());
};

Util.picRectangleInit_batch = function (selector, wScale, hScale) {
    var rectangles = $(selector);
    for (var i = 0; i < rectangles.length; i++) {
        Util.picRectangleInit($(rectangles[i]), wScale, hScale);
    }
};
Util.picRectangleInit = function ($picDiv, wScale, hScale) {
    $picDiv.css("overflow", "hidden");
    $picDiv.height($picDiv.width() / wScale * hScale);
};

/**
 * ��䷽ʽ��������ͼ��������
 * @param picObjArr
 */
Util.drawPicByFill_batch = function (picObjArr) {
    if (picObjArr != undefined && picObjArr != null) {
        for (var i = 0; i < picObjArr.length; i++) {
            Util.drawPicByFill(picObjArr[i]);
        }
    }
};

/**
 * ��䷽ʽ��������ͼ
 * @param picObj
 */
Util.drawPicByFill = function (picObj) {
    if (picObj != undefined && picObj != null) {
        var picID = picObj.pid;
        var picUrl = picObj.url;

        var img = new Image();
        img.onload = function () {
            var $picDiv = $("#" + picID);

            var boxHeight = $picDiv.height();
            var boxWidth = $picDiv.width();

            var boxScale = boxWidth / boxHeight;

            var $img = $(img);
            if ((img.width / img.height) >= boxScale) {
                $img.height($picDiv.height());
                $img.css("margin-left", ($img.height() / (img.height / img.width) - $picDiv.width()) / -2);
            }
            else {
                $img.width($picDiv.width());
                $img.css("margin-top", ($img.width() * (img.height / img.width) - $picDiv.height()) / -2);
            }
            $picDiv.append(img);
        };
        img.src = picUrl;
    }
};


/**
 * ��䷽ʽ��������ͼ
 * @param picObj
 */
Util.drawPicByFill2 = function (picObj) {
    if (picObj != undefined && picObj != null) {
        var picID = picObj.pid;
        var picUrl = picObj.url;

        var img = new Image();
        img.onload = function () {
            var $picDiv = $("#" + picID);

            var boxHeight = $picDiv.height();
            var boxWidth = $picDiv.width();

            var boxScale = boxWidth / boxHeight;

            var $img = $(img);
            if ((img.width / img.height) >= boxScale) {
                // $img.height($picDiv.height());
//                $img.css("margin-left", ($img.height()/(img.height/img.width) - $picDiv.width()) / -2);
            }
            else {
                // $img.width($picDiv.width());
                //$img.css("margin-top", ($img.width()*(img.height/img.width) - $picDiv.height()) / -2);
            }
            $img.height(boxWidth);
            $img.width(boxWidth);
            $picDiv.append(img);
        };
        img.src = picUrl;
    }
};

//��תָ��ԭ���ķ���
function gotoOrign(type) {
    try {
        if ("${wxSession.ce}" == "android") {
            if ("home" == type) {
                window.mobile.button(0);
            } else if ("video" == type) {
                window.mobile.button(1);
            } else if ("task" == type) {
                window.mobile.button(2);
            } else if ("me" == type) {
                window.mobile.button(3);
            }
        } else if ("${wxSession.ce}" == "iOS") {
            loadEventFunc(type, "");
        }
    } catch (e) {
    }
}


//��תָ��ԭ���ķ���
function gotoOrignForCe(ce, type) {
    try {
        if (ce == "android") {
            if ("home" == type) {
                window.mobile.button(0);
            } else if ("video" == type) {
                window.mobile.button(1);
            } else if ("task" == type) {
                window.mobile.button(2);
            } else if ("me" == type) {
                window.mobile.button(3);
            }
        } else if (ce == "iOS") {
            loadEventFunc(type, "");
        }
    } catch (e) {
    }
}

//ǿ�Ʊ�����ֵ�ĺ�2λ��û�в���0 - ����������
function changeTwoDecimal_f(x) {
    var f_x = parseFloat(x);
    if (isNaN(f_x)) {
        alert('function:changeTwoDecimal->parameter error');
        return false;
    }
    var f_x = Math.round(x * 100) / 100;
    var s_x = f_x.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2) {
        s_x += '0';
    }
    return s_x;
}