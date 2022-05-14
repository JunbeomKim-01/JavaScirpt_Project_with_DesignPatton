class WeatherFactory{
    static factory(name){
        if(name === "VilageFcstInfoService_2.0"){ return new VilageFcstInfoService(); }
        else if(name === "LivingWthrIdxServiceV2"){ return new LivingWthrIdxServiceV2(); }
    }
};
const a = WeatherFactory.factory("VilageFcstInfoService_2.0");
console.log(a.getInfo());
//단기 or 기상청 생활기상기수 팩토리 패턴
class VilageFcstInfoService extends WeatherFactory{  //단기 일보
baseUrl = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/";
setUrl = baseURL => methodName=> serviseKey=>time => nx=>ny => fetch(baseUrl+methodName+"?serviseKey="+serviseKey+'&numOfRows=10&pageNo=1&base_date=20210628&base_time='+time+"&nx="+nx+"&ny="+ny);
constructor(){ 
    super("VilageFcstInfoService_2.0"); 
} 
getInfo(){
    console.log("VilageFcstInfoService_2.0");
}

} 
class LivingWthrIdxServiceV2 extends WeatherFactory{ //기상청 생활기상 
constructor(){ 
    super("LivingWthrIdxServiceV2"); 
}
getInfo(){
    console.log("LivingWthrIdxServiceV2");
} 
}
