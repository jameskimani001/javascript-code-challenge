function checkspeed(speed){
    const speedlimit =70;
    if (speed < speedlimit){
        console.log ("ok");
    }else{
        const demeritpoints =maths.floor((speed-speedlimit) /5);
        console.log(`points; ${demeritpoints}`);
        if (demeritpoints > 12){
            console.log("license suspended");
        }
    }
}