
//기상청 생활기상기수(3.0) -아래
//base = http://apis.data.go.kr/1360000/LivingWthrIdxServiceV2/
    //동파 가능 자수 getFreezeIdxV2
    //http://apis.data.go.kr/1360000/LivingWthrIdxServiceV2/getFreezeIdxV2?serviceKey=인증키&areaNo=1100000000&time=2021030818
    //자외선 지수 getUVIdxV2
    //http://apis.data.go.kr/1360000/LivingWthrIdxServiceV2/getUVIdxV2?serviceKey=인증키&areaNo=1100000000&time=2021070618
    //대기확산 지수 getAirDiffusionIdxV2
    //http://apis.data.go.kr/1360000/LivingWthrIdxServiceV2/getAirDiffusionIdxV2?serviceKey=인증키&areaNo=1100000000&time=2021070618
    //체감 온도 조회 getSenTaIdxV2
    //http://apis.data.go.kr/1360000/LivingWthrIdxServiceV2/getSenTaIdxV2?serviceKey=인증키&areaNo=1100000000&time=2021070618&requestCode=A41



//단기 일보 (아래)
//base url = http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/
    //getUltraSrtFcst(초단기 예보)
    //http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=인증키&numOfRows=10&pageNo=1&base_date=20210628&base_time=0630&nx=55&ny=127

    //getVilageFcst(단기 예보)
    //http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=인증키&numOfRows=10&pageNo=1&base_date=20210628&base_time=0500&nx=55&ny=127


/* NodeJs 샘플 코드 */
var request = require('request');
var url = 'http://apis.data.go.kr/1360000/LivingWthrIdxServiceV2/getFreezeIdxV2?serviceKey=luudN4PKzCSZuNhPxijuuKzBu8KWSxHmpD14jIFV9%2FV9uT1tDodPv7zNKluYzWTvYfYTMM2ML0cd1Ioma6Vu9w%3D%3D&areaNo=1100000000&time=2021030818';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=luudN4PKzCSZuNhPxijuuKzBu8KWSxHmpD14jIFV9%2FV9uT1tDodPv7zNKluYzWTvYfYTMM2ML0cd1Ioma6Vu9w%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('serviceKey') + '=' + encodeURIComponent('-'); /* 공공데이터포털에서 받은 인증키 */
queryParams += '&' + encodeURIComponent('areaNo') + '=' + encodeURIComponent('1100000000'); /* 서울지점 */
queryParams += '&' + encodeURIComponent('time') + '=' + encodeURIComponent('2021030818'); /* 2017년3월8일6시 */
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('xml'); /* xml, json 선택(미입력시 xml) */

request(
{
url: url,
method: 'GET'
}, function (error, response, body) 
{
//console.log('Status', response.statusCode);
console.log('Headers', JSON.stringify(response.headers));
console.log('Reponse received', body);
});
