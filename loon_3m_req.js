﻿
console.log("3m_request脚本开始!");
var url = $request.url;
var headers = $request.headers;
var body = $request.body;
try {

    //打卡时改经纬度地址
    if (url.indexOf("/save/m3") > -1) {

        console.log("url:" + url);

        body = JSON.parse(body);

        body.longitude = "114.3196" + parseInt(Math.random() * (99 - 10 + 1) + 10, 10) + "26257" + parseInt(Math.random() * (99 - 10 + 1) + 10, 10);//114.3196302625787
        body.latitude = "30.4720" + parseInt(Math.random() * (99 - 10 + 1) + 10, 10) + "292101" + parseInt(Math.random() * (99 - 10 + 1) + 10, 10);//30.47208829210171
        body.town = "洪山区";
        body.street = "湖北省武汉市洪山区街道创意天地-06办公楼创意天地";
        body.nearAddress = "湖北省武汉市洪山区街道创意天地-06办公楼创意天地";

        console.log("body:" + JSON.stringify(body));

        body = JSON.stringify(body);
    }

} catch (e) {
    console.log("catch:" + e);
}

$done({ body: body });
//$done({ request: { body: body } });
console.log("执行完成!!!!");