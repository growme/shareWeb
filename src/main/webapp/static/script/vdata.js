/*
 * 用途：校验ip地址的格式 输入：strIP：ip地址 返回：如果通过验证返回true,否则返回false；
 * 
 */
function isIP(strIP) {
	if (isNull(strIP))
		return false;
	var re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g // 匹配IP地址的正则表达式
	if (re.test(strIP)) {
		if (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256
				&& RegExp.$4 < 256)
			return true;
	}
	return false;
}

/*
 * 用途：检查输入字符串是否为空或者全部都是空格 输入：str 返回： 如果全是空返回true,否则返回false
 */
function isNullStr(str) {
	if (str == "")
		return true;
	var regu = "^[ ]+$";
	var re = new RegExp(regu);
	return re.test(str);
}

/*
 * 用途：检查输入对象的值是否符合整数格式 输入：str 输入的字符串 返回：如果通过验证返回true,否则返回false
 * 
 */
function isInteger(str) {
	var regu = /^[-]{0,1}[0-9]{1,}$/;
	return regu.test(str);
}

/*
 * 用途：检查输入手机号码是否正确 输入： s：字符串 返回： 如果通过验证返回true,否则返回false
 * 
 */
function checkMobile(s) {
	var regu = /^((\(\d{3}\))|(\d{3}\-))?13\d{9}$/;
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	} else {
		return false;
	}
}

/*
 * 用途：检查输入字符串是否符合正整数格式 输入： s：字符串 返回： 如果通过验证返回true,否则返回false
 * 
 */
function isNumber(s) {
	var regu = "^[0-9]+$";
	var re = new RegExp(regu);
	if (s.search(re) != -1) {
		return true;
	} else {
		return false;
	}
}

/*
 * 用途：检查输入字符串是否是带小数的数字格式,可以是负数 输入： s：字符串 返回： 如果通过验证返回true,否则返回false
 * 
 */
function isDecimal(str) {
	if (isInteger(str))
		return true;
	var re = /^[-]{0,1}(\d+)[\.]+(\d+)$/;
	if (re.test(str)) {
		if (RegExp.$1 == 0 && RegExp.$2 == 0)
			return false;
		return true;
	} else {
		return false;
	}
}

/*
 * 用途：检查输入对象的值是否符合端口号格式 输入：str 输入的字符串 返回：如果通过验证返回true,否则返回false
 * 
 */
function isPort(str) {
	return (isNumber(str) && str < 65536);
}

/*
 * 用途：检查输入对象的值是否符合E-Mail格式 输入：str 输入的字符串 返回：如果通过验证返回true,否则返回false
 * 
 */
function isEmail(str) {
	var myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
	if (myReg.test(str))
		return true;
	return false;
}

/*
 * 用途：检查输入字符串是否符合金额格式 格式定义为带小数的正数，小数点后最多三位 输入： s：字符串 返回： 如果通过验证返回true,否则返回false
 * 
 */
function isMoney(s) {
	var regu = "^[0-9]+[\.][0-9]{0,3}$";
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	} else {
		return false;
	}
}
/*
 * 用途：检查输入字符串是否只由英文字母和数字和下划线组成 输入： s：字符串 返回： 如果通过验证返回true,否则返回false
 * 
 */
function isNumberOr_Letter(s) {// 判断是否是数字或字母

	var regu = "^[0-9a-zA-Z\_]+$";
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	} else {
		return false;
	}
}
/*
 * 用途：检查输入字符串是否只由英文字母和数字组成 输入： s：字符串 返回： 如果通过验证返回true,否则返回false
 * 
 */
function isNumberOrLetter(s) {// 判断是否是数字或字母

	var regu = "^[0-9a-zA-Z]+$";
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	} else {
		return false;
	}
}
/*
 * 用途：检查输入字符串是否只由汉字、字母、数字组成 输入： value：字符串 返回： 如果通过验证返回true,否则返回false
 * 
 */
function isChinaOrNumbOrLett(s) {// 判断是否是汉字、字母、数字组成

	var regu = "^[0-9a-zA-Z\u4e00-\u9fa5]+$";
	var re = new RegExp(regu);
	if (re.test(s)) {
		return true;
	} else {
		return false;
	}
}

/*
 * 用途：判断是否是日期 输入：date：日期；fmt：日期格式 返回：如果通过验证返回true,否则返回false
 */
function isDate(date, fmt) {
	if (fmt == null)
		fmt = "yyyyMMdd";
	var yIndex = fmt.indexOf("yyyy");
	if (yIndex == -1)
		return false;
	var year = date.substring(yIndex, yIndex + 4);
	var mIndex = fmt.indexOf("MM");
	if (mIndex == -1)
		return false;
	var month = date.substring(mIndex, mIndex + 2);
	var dIndex = fmt.indexOf("dd");
	if (dIndex == -1)
		return false;
	var day = date.substring(dIndex, dIndex + 2);
	if (!isNumber(year) || year > "2100" || year < "1900")
		return false;
	if (!isNumber(month) || month > "12" || month < "01")
		return false;
	if (day > getMaxDay(year, month) || day < "01")
		return false;
	return true;
}

function getMaxDay(year, month) {
	if (month == 4 || month == 6 || month == 9 || month == 11)
		return "30";
	if (month == 2)
		if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
			return "29";
		else
			return "28";
	return "31";
}

/*
 * 用途：字符1是否以字符串2结束 输入：str1：字符串；str2：被包含的字符串 返回：如果通过验证返回true,否则返回false
 * 
 */
function isLastMatch(str1, str2) {
	var index = str1.lastIndexOf(str2);
	if (str1.length == index + str2.length)
		return true;
	return false;
}

/*
 * 用途：字符1是否以字符串2开始 输入：str1：字符串；str2：被包含的字符串 返回：如果通过验证返回true,否则返回false
 * 
 */
function isFirstMatch(str1, str2) {
	var index = str1.indexOf(str2);
	if (index == 0)
		return true;
	return false;
}

/*
 * 用途：字符1是包含字符串2 输入：str1：字符串；str2：被包含的字符串 返回：如果通过验证返回true,否则返回false
 * 
 */
function isMatch(str1, str2) {
	var index = str1.indexOf(str2);
	if (index == -1)
		return false;
	return true;
}

/*
 * 用途：检查输入的起止日期是否正确，规则为两个日期的格式正确， 且结束如期>=起始日期 输入： startDate：起始日期，字符串
 * endDate：结束如期，字符串 返回： 如果通过验证返回true,否则返回false
 * 
 */
function checkTwoDate(startDate, endDate) {
	if (!isDate(startDate)) {
		alert("起始日期不正确!");
		return false;
	} else if (!isDate(endDate)) {
		alert("终止日期不正确!");
		return false;
	} else if (startDate > endDate) {
		alert("起始日期不能大于终止日期!");
		return false;
	}
	return true;
}

/*
 * 用途：检查输入的Email信箱格式是否正确 输入： strEmail：字符串 返回： 如果通过验证返回true,否则返回false
 * 
 */
function checkEmail(strEmail) {
	// var emailReg = /^[_a-z0-9]+@([_a-z0-9]+\.)+[a-z0-9]{2,3}$/;
	var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	if (emailReg.test(strEmail)) {
		return true;
	} else {
		alert("您输入的Email地址格式不正确！");
		return false;
	}
}

/*
 * 用途：检查输入的电话号码格式是否正确 输入： strPhone：字符串 返回： 如果通过验证返回true,否则返回false
 * 
 */
function checkPhone(strPhone) {
	var phoneRegWithArea = /^[0][1-9]{2,3}-[0-9]{5,10}$/;
	var phoneRegNoArea = /^[1-9]{1}[0-9]{5,8}$/;
	if (strPhone.length > 9) {
		if (phoneRegWithArea.test(strPhone)) {
			return true;
		} else {
			return false;
		}
	} else {
		if (phoneRegNoArea.test(strPhone)) {
			return true;
		} else {
			return false;
		}

	}
}

/*
 * 用途：检查复选框被选中的数目 输入： checkboxID：字符串 返回： 返回该复选框中被选中的数目
 * 
 */

function checkSelect(checkboxID) {
	var check = 0;
	var i = 0;
	if (document.all(checkboxID).length > 0) {
		for (i = 0; i < document.all(checkboxID).length; i++) {
			if (document.all(checkboxID).item(i).checked) {
				check += 1;
			}

		}
	} else {
		if (document.all(checkboxID).checked)
			check = 1;
	}
	return check;
}

function getTotalBytes(varField) {
	if (varField == null)
		return -1;

	var totalCount = 0;
	for (i = 0; i < varField.value.length; i++) {
		if (varField.value.charCodeAt(i) > 127)
			totalCount += 2;
		else
			totalCount++;
	}
	return totalCount;
}

function getFirstSelectedValue(checkboxID) {
	var value = null;
	var i = 0;
	if (document.all(checkboxID).length > 0) {
		for (i = 0; i < document.all(checkboxID).length; i++) {
			if (document.all(checkboxID).item(i).checked) {
				value = document.all(checkboxID).item(i).value;
				break;
			}
		}
	} else {
		if (document.all(checkboxID).checked)
			value = document.all(checkboxID).value;
	}
	return value;
}

function getFirstSelectedIndex(checkboxID) {
	var value = -2;
	var i = 0;
	if (document.all(checkboxID).length > 0) {
		for (i = 0; i < document.all(checkboxID).length; i++) {
			if (document.all(checkboxID).item(i).checked) {
				value = i;
				break;
			}
		}
	} else {
		if (document.all(checkboxID).checked)
			value = -1;
	}
	return value;
}

function selectAllCK(checkboxID, status) {

	if (document.all(checkboxID) == null)
		return;

	if (document.all(checkboxID).length > 0) {
		for (i = 0; i < document.all(checkboxID).length; i++) {

			document.all(checkboxID).item(i).checked = status;
		}
	} else {
		document.all(checkboxID).checked = status;
	}
}

function selectInverse(checkboxID) {
	if (document.all(checkboxID) == null)
		return;

	if (document.all(checkboxID).length > 0) {
		for (i = 0; i < document.all(checkboxID).length; i++) {
			document.all(checkboxID).item(i).checked = !document
					.all(checkboxID).item(i).checked;
		}
	} else {
		document.all(checkboxID).checked = !document.all(checkboxID).checked;
	}
}

function checkDate(value) {
	if (value == '')
		return true;
	if (value.length != 8 || !isNumber(value))
		return false;
	var year = value.substring(0, 4);
	if (year > "2100" || year < "1900")
		return false;

	var month = value.substring(4, 6);
	if (month > "12" || month < "01")
		return false;

	var day = value.substring(6, 8);
	if (day > getMaxDay(year, month) || day < "01")
		return false;

	return true;
}

/*
 * 用途：检查输入的起止日期是否正确，规则为两个日期的格式正确或都为空 且结束日期>=起始日期 输入： startDate：起始日期，字符串 endDate：
 * 结束日期，字符串 返回： 如果通过验证返回true,否则返回false
 * 
 */
function checkPeriod(startDate, endDate) {
	if (!checkDate(startDate)) {
		alert("起始日期不正确!");
		return false;
	} else if (!checkDate(endDate)) {
		alert("终止日期不正确!");
		return false;
	} else if (startDate > endDate) {
		alert("起始日期不能大于终止日期!");
		return false;
	}
	return true;
}

/*
 * 用途：检查证券代码是否正确 输入： secCode:证券代码 返回： 如果通过验证返回true,否则返回false
 * 
 */
function checkSecCode(secCode) {
	if (secCode.length != 6) {
		alert("证券代码长度应该为6位");
		return false;
	}

	if (!isNumber(secCode)) {
		alert("证券代码只能包含数字");

		return false;
	}
	return true;
}

/*******************************************************************************
 * function:cTrim(sInputString,iType) description:字符串去空格的函数
 * parameters:iType：1=去掉字符串左边的空格
 * 
 * 2=去掉字符串左边的空格 0=去掉字符串左边和右边的空格 return value:去掉空格的字符串
 ******************************************************************************/
function cTrim(sInputString, iType) {
	var sTmpStr = ' ';
	var i = -1;

	if (iType == 0 || iType == 1) {
		while (sTmpStr == ' ') {
			++i;
			sTmpStr = sInputString.substr(i, 1);
		}
		sInputString = sInputString.substring(i);
	}

	if (iType == 0 || iType == 2) {
		sTmpStr = ' ';
		i = sInputString.length;
		while (sTmpStr == ' ') {
			--i;
			sTmpStr = sInputString.substr(i, 1);
		}
		sInputString = sInputString.substring(0, i + 1);
	}
	return sInputString;
}

/**
 * jquery获取复选框值  
 * @param {} ckname
 * @return {}
 */
function getAllCheckVal(ckname){    
  var chk_value =[];    
  $('input[name="'+ckname+'"]:checked').each(function(){    
   chk_value.push($(this).val());    
  });    
  return chk_value;    
}   

//是否为英文和数字
function isEnNum(str){if(/^[0-9a-zA-Z_]+$/.test(str))return true;return false;};
//判断是否是英文,是返回true，不是返回false
function isEn(str){if(/^[A-Za-z]+$/.test(str))return true;return false;};
//判断是否是姓名,是返回true，不是返回false
function isUName(str){if(/^[\u0391-\uFFE5\w ]+$/.test(str))return true;return false;};
//判断是否是qq,是返回true，不是返回false
function isQQ(qq){if(/^[1-9][0-9]{4,14}$/.test(qq))return true;return false;};
//判断是否是电话号,是返回true，不是返回false
function isPhone(phone){if(/^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(phone))return true;return false;};
//判断是否是手机号,是返回true，不是返回false
function isTel(tel){if(/^1(3|4|5|7|8)\d{9}$/.test(tel))return true;return false;};
//判断是否是电子邮箱,是返回true，不是返回false
function isEmail(email){if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))return true;return false;};
//判断是否是日期,是返回true，不是返回false
function isDate(date){if(date.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/))return true;return false;};		
//判断是否是日期时间,是返回true，不是返回false
function isDatetime(datetime){if(datetime.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/))return true;return false;};
//判断是否为合法http(s)
function isUrl(str){if(/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(str))return true;return false;};
//判断是否为合法路劲
function isValidUrl(str){if(/\/([\w-])+[\w-]+(\/[\w- .\/?%&=]*)?/.test(str))return true;return false;};
//判断数值是否在范围内(不包含临界):min 最少值,max 最大值,是返回true，不是返回false
function numrange(v,min,max){v=parseInt(v);min=parseInt(min);max=parseInt(max);if((min<v)&&(v<max))return true;return false;};
//判断数值是否在范围内(包含临界),min 最少值,max 最大值,是返回true，不是返回false
function numrangeth(v,min,max){v=parseInt(v);min=parseInt(min);max=parseInt(max);if((min<=v)&&(v<=max))return true;return false;};

//处理过滤
function safeStr(obj){
	var str = obj.value;
	obj.value = stripscript(str);
}

function stripscript(s) 
{ 
var pattern = new RegExp("[%--`~!#$^&*()=|{}':;'\\[\\]<>/?~！#￥……&*（）——|{}【】‘；：”“'，、？]")
var rs = ""; 
for (var i = 0; i < s.length; i++) { 
 rs = rs+s.substr(i, 1).replace(pattern, ''); 
}
return rs;
}

/**
* @function:getRandomStr->生成随机的字符串
* @param:len->生存随机字符串的长度
* @tdd->IE6-9 chrome Firefox通过测试
* 
*/
function getRandomStr(len) {
  var rdmString = "";
  //toSting接受的参数表示进制，默认为10进制。36进制为0-9 a-z
  for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
  return rdmString.substr(0, len);
}

/**
 * 生成随机数
 * @param Min 开始值
 * @param Max 结束值
 * @returns
 */
function getRandomNum(Min,Max)
{   
var Range = Max - Min;   
var Rand = Math.random();   
return(Min + Math.round(Rand * Range));   
}   
 

/**
 * 生成数字字母混淆
 * @param t
 * @param n
 * @returns {String}
 */
function generateMixed(t,n) {
	var chars = null;
	 if(t==0){
		 chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	 }else if(t==1){
		 chars = ['0','1','2','3','4','5','6','7','8','9','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	 }else{
		 chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	 }
	 var res = "";
     for(var i = 0; i < n ; i ++) {
         var id = Math.ceil(Math.random() * chars.length);
         res += chars[id];
     }
     return res;
}

/*var num1= getRandomNum(1,10);   
var num2 = generateMixed(1,6);   
var num3 = getRandomStr(5);   
alert(num1);  
alert(num2); 
alert(num3); */