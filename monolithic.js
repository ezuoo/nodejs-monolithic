const http = require('http');
const url = require('url');
const querystring = require('querystring');

const members = require('./monolithic_members');
const goods = require('./monolithic_goods');
const purchases = require('./monolithic_purchases');

/**
 * HTTP 서버를 만들고 요청 처리
 */
var server = http.createServer( (req, res) => {
    var method = req.method;
    var uri = url.parse(req.url, true);
    var pathname = uri.pathname;

    if(method === "POST" || method === "PUT") {
        var body = '';

        req.on('data', function(data) {
            body += data;
        });

        req.on('end', function(){
            var params;

            if(req.headers['content-type'] == "application/json"){
                params = JSON.parse(body);
            } else {
                console.log(`'end' body : ${body}`);
                params = querystring.parse(body);
            }
            onRequest(res, method, pathname, params);
        });
    } else {       
        onRequest(res, method, pathname, uri.query);
    }
}).listen(8000, () => {
    console.log('Server Listening on 8000');
  });

/**
 * 요청에 대해 회원 관리, 상품 관리, 구매 관리 모듈별로 분기
 * @param  res  response 객체
 * @param  method  메서드  
 * @param  pathname  URI
 * @param  params  입력 파라미터
 */
function onRequest(res, method, pathname, params) {
    
    switch(pathname.split('/')[1]) {
        case 'members':
            members.onRequest(res, method, pathname, params, response);
            break;

        case 'goods':
            goods.onRequest(res, method, pathname, params, response);
            break;

        case 'purchases':
            purchases.onRequest(res, method, pathname, params, response);
            break;

        default:
            res.writeHead(404);
            return res.end();
    }
}

/**
 * HTTP 헤더에 JSON 형식으로 응답
 * @param  res  response 객체
 * @param  packet  결과 파라미터
 */
function response(res, packet) {    
    res.writeHead(200, { 'Content-type' : 'application/json' });
    res.end(JSON.stringify(packet));
    // console.log('res data : ', JSON.stringify(packet));
}
