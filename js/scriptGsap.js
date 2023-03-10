var masterTimeline = new TimelineMax();

function preLoad() {
    var load = document.querySelector('#loading-animation');
    masterTimeline.to(load, .5,{
        scale: 0,
        opacity:0,
        delay:8.1,
        
    })

    
}


function cyberpunk(){
    var cyberpunk=new TimelineMax();

    cyberpunk
        //Setting initial point of the yellow parts
        .set("#C_top",{rotate:15,transformOrigin:"bottom bottom"})
        .set("#C_bottom",{rotate:5,transformOrigin:"bottom bottom"})
        .set("#Y_top",{rotate:7,transformOrigin:"bottom bottom"})
        .set("#Y_bottom",{y:15,rotate:10,transformOrigin:"bottom bottom"})
        .set("#BER_top",{y:-15,rotate:5,transformOrigin:"bottom bottom"})
        .set("#B_bottom",{y:10,rotate:-7,transformOrigin:"bottom bottom"})
        .set("#E_bottom_1,#E_bottom_2",{y:10,rotate:-7,transformOrigin:"bottom bottom"})
        .set("#R_bottom",{y:10,rotate:-7,transformOrigin:"bottom bottom"})
        .set("#P_top",{y:-17,rotate:-7,transformOrigin:"bottom bottom"})
        .set("#P_bottom",{y:10,rotate:4,transformOrigin:"bottom bottom"})
        .set("#U_top",{x:8,y:10,transformOrigin:"bottom bottom"})
        .set("#U_bottom",{y:10,transformOrigin:"bottom bottom"})
        .set("#N_top,#N_bottom_1",{x:5,y:-20,transformOrigin:"bottom bottom"})
        .set("#N_bottom_2",{y:10,rotate:7})
        .set("#N_bottom_3",{y:10,rotate:-7})
        .set("#K_top",{y:-20,rotate:-7,transformOrigin:"bottom bottom"})
        .set("#K_bottom_1",{x:6,y:10,rotate:7,transformOrigin:"bottom bottom"})
        .set("#K_bottom_2,#K_bottom_3",{x:6,y:10,rotate:7,transformOrigin:"bottom bottom"})
        
        //Setting initial point of the blue parts 
        .set("#C_blue,#Y_blue,#BER_blue,#PU_blue,#N_blue,#K_blue,#n2077",{opacity:0})

        //Init Rotation
        .to("#C_top",2.1,{rotate:10,transformOrigin:"bottom bottom",ease:"none"},0)
        .to("#C_bottom",2.1,{rotate:2,transformOrigin:"bottom bottom",ease:"none"},0)
        .to("#Y_top",2.1,{rotate:4,transformOrigin:"bottom bottom",ease:"none"},0)
        .to("#Y_bottom",2.1,{y:6,rotate:4,transformOrigin:"bottom bottom",ease:"none"},0)
        .to("#BER_top",2.1,{y:-7,rotate:3,transformOrigin:"bottom bottom",ease:"none"},0)
        .to("#B_bottom",2.1,{y:6,rotate:-3,transformOrigin:"bottom bottom",ease:"none"},0)
        .to("#E_bottom_1,#E_bottom_2",2.1,{y:6,rotate:-3,transformOrigin:"bottom bottom",ease:"none"},0)
        .to("#R_bottom",2.1,{y:6,rotate:-3,transformOrigin:"bottom bottom",ease:"none"},0)
        .to("#P_top",2.1,{y:-10,rotate:-4,transformOrigin:"bottom bottom",ease:"none"},0)
        .to("#P_bottom",2.1,{y:6,rotate:2,transformOrigin:"bottom bottom",ease:"none"},0)
        .to("#U_top",2.1,{x:3,y:8,transformOrigin:"bottom bottom",ease:"none"},0)
        .to("#U_bottom",2.1,{y:8,transformOrigin:"bottom bottom",ease:"none"},0)
        .to("#N_top,#N_bottom_1",2.1,{x:2,y:-8,transformOrigin:"bottom bottom",ease:"none"},0)
        .to("#N_bottom_2",2.1,{y:3,rotate:3,transformOrigin:"bottom bottom",ease:"none"},0)
        .to("#N_bottom_3",2.1,{y:3,rotate:-3,transformOrigin:"bottom bottom",ease:"none"},0)
        .to("#K_top",2.1,{y:-8,rotate:-3,transformOrigin:"bottom bottom",ease:"none"},0)
        .to("#K_bottom_1",2.1,{x:3,y:5,rotate:3,transformOrigin:"bottom bottom",ease:"none"},0)
        .to("#K_bottom_2,#K_bottom_3",2.1,{x:3,y:5,rotate:3,transformOrigin:"bottom bottom",ease:"none"},0)
        
        //Skew logo
        .to("#Cyberpunk2077",0.02,{skewX:70,transformOrigin:"center center",ease:Power3.easeOut})
        .to("#Cyberpunk2077",0.02,{skewX:0,transformOrigin:"center center",ease:Power3.easeOut})

        //Flicker phase 1 (Rotational increase)
        .to("#C_top",0.001,{rotate:19,transformOrigin:"bottom bottom",ease:"none"})
        .to("#C_bottom",0.001,{rotate:6,transformOrigin:"bottom bottom",ease:"none"},'-=0.001')
        .to("#Y_top",0.001,{rotate:9,transformOrigin:"bottom bottom",ease:"none"},'-=0.001')
        .to("#Y_bottom",0.001,{x:12,y:17,rotate:9,transformOrigin:"bottom bottom",ease:"none"},'-=0.001')
        .to("#BER_top",0.001,{y:-12,rotate:7,transformOrigin:"bottom bottom",ease:"none"},'-=0.001')
        .to("#B_bottom",0.001,{y:12,rotate:-9,transformOrigin:"bottom bottom",ease:"none"},'-=0.001')
        .to("#E_bottom_1,#E_bottom_2",0.001,{y:12,rotate:-9,transformOrigin:"bottom bottom",ease:"none"},'-=0.001')
        .to("#R_bottom",0.001,{y:12,rotate:-9,transformOrigin:"bottom bottom",ease:"none"},'-=0.001')
        .to("#P_top",0.001,{y:-20,rotate:-8,transformOrigin:"bottom bottom",ease:"none"},'-=0.001')
        .to("#P_bottom",0.001,{y:13,rotate:6,transformOrigin:"bottom bottom",ease:"none"},'-=0.001')
        .to("#U_top",0.001,{x:12,y:12,transformOrigin:"bottom bottom",ease:"none"},'-=0.001')
        .to("#U_bottom",0.001,{y:13,transformOrigin:"bottom bottom",ease:"none"},'-=0.001')
        .to("#N_top,#N_bottom_1",0.001,{x:7,y:-15,transformOrigin:"bottom bottom",ease:"none"},'-=0.001')
        .to("#N_bottom_2",0.001,{y:12,rotate:8,transformOrigin:"bottom bottom",ease:"none"},'-=0.001')
        .to("#N_bottom_3",0.001,{y:12,rotate:-8,transformOrigin:"bottom bottom",ease:"none"},'-=0.001')
        .to("#K_top",0.001,{y:-15,rotate:-8,transformOrigin:"bottom bottom",ease:"none"},'-=0.001')
        .to("#K_bottom_1",0.001,{x:8,y:12,rotate:8,transformOrigin:"bottom bottom",ease:"none"},'-=0.001')
        .to("#K_bottom_2,#K_bottom_3",0.001,{x:8,y:12,rotate:8,transformOrigin:"bottom bottom",ease:"none"},'-=0.001')

        //Skew logo
        .to("#Cyberpunk2077",0.02,{skewX:70,transformOrigin:"center center",ease:Power3.easeOut})
        .to("#Cyberpunk2077",0.02,{skewX:0,transformOrigin:"center center",ease:Power3.easeOut})

        //Flicker phase 2 (Rotational decrease)
        .to("#C_top",0.006,{rotate:5,transformOrigin:"bottom bottom",ease:"none"},'+=0.1')
        .to("#C_bottom",0.006,{rotate:3,transformOrigin:"bottom bottom",ease:"none"},'-=0.006')
        .to("#Y_top",0.006,{rotate:3,transformOrigin:"bottom bottom",ease:"none"},'-=0.006')
        .to("#Y_bottom",0.006,{x:-9,y:9,rotate:3,transformOrigin:"bottom bottom",ease:"none"},'-=0.006')
        .to("#BER_top",0.006,{y:-9,rotate:4,transformOrigin:"bottom bottom",ease:"none"},'-=0.006')
        .to("#B_bottom",0.006,{y:4,rotate:2,transformOrigin:"bottom bottom",ease:"none"},'-=0.006')
        .to("#E_bottom_1,#E_bottom_2",0.006,{y:4,rotate:2,transformOrigin:"bottom bottom",ease:"none"},'-=0.006')
        .to("#R_bottom",0.006,{y:4,rotate:2,transformOrigin:"bottom bottom",ease:"none"},'-=0.006')
        .to("#P_top",0.006,{y:-9,rotate:-3,transformOrigin:"bottom bottom",ease:"none"},'-=0.006')
        .to("#P_bottom",0.006,{y:4,rotate:2,transformOrigin:"bottom bottom",ease:"none"},'-=0.006')
        .to("#U_top",0.006,{x:8,y:8,transformOrigin:"bottom bottom",ease:"none"},'-=0.006')
        .to("#U_bottom",0.006,{y:8,transformOrigin:"bottom bottom",ease:"none"},'-=0.006')
        .to("#N_top,#N_bottom_1",0.006,{x:3,y:-8,transformOrigin:"bottom bottom",ease:"none"},'-=0.006')
        .to("#N_bottom_2",0.006,{y:4,rotate:3,transformOrigin:"bottom bottom",ease:"none"},'-=0.006')
        .to("#N_bottom_3",0.006,{y:4,rotate:-3,transformOrigin:"bottom bottom",ease:"none"},'-=0.006')
        .to("#K_top",0.006,{y:-6,rotate:-3,transformOrigin:"bottom bottom",ease:"none"},'-=0.006')
        .to("#K_bottom_1",0.006,{x:3,y:6,rotate:3,transformOrigin:"bottom bottom",ease:"none"},'-=0.006')
        .to("#K_bottom_2,#K_bottom_3",0.006,{x:3,y:6,rotate:3,transformOrigin:"bottom bottom",ease:"none"},'-=0.006')

        //Skew logo
        .to("#Cyberpunk2077",0.02,{skewX:70,transformOrigin:"center center",ease:Power3.easeOut})
        .to("#Cyberpunk2077",0.02,{skewX:0,transformOrigin:"center center",ease:Power3.easeOut})

        //Flicker phase 3 (Rotational increase)
        .to("#C_top",0.007,{rotate:15,transformOrigin:"bottom bottom",ease:"none"})
        .to("#C_bottom",0.007,{rotate:5,transformOrigin:"bottom bottom",ease:"none"},'-=0.007')
        .to("#Y_top",0.007,{rotate:7,transformOrigin:"bottom bottom",ease:"none"},'-=0.007')
        .to("#Y_bottom",0.007,{x:0,y:10,rotate:7,transformOrigin:"bottom bottom",ease:"none"},'-=0.007')
        .to("#BER_top",0.007,{y:-12,rotate:6,transformOrigin:"bottom bottom",ease:"none"},'-=0.007')  
        .to("#B_bottom",0.007,{y:7,rotate:-4,transformOrigin:"bottom bottom",ease:"none"},'-=0.007')
        .to("#E_bottom_1,#E_bottom_2",0.007,{y:7,rotate:-4,transformOrigin:"bottom bottom",ease:"none"},'-=0.007')
        .to("#R_bottom",0.007,{y:7,rotate:-4,transformOrigin:"bottom bottom",ease:"none"},'-=0.007')
        .to("#P_top",0.007,{y:-15,rotate:-7,transformOrigin:"bottom bottom",ease:"none"},'-=0.007')
        .to("#P_bottom",0.007,{y:10,rotate:5,transformOrigin:"bottom bottom",ease:"none"},'-=0.007')
        .to("#U_top",0.007,{x:10,y:15,transformOrigin:"bottom bottom",ease:"none"},'-=0.007')
        .to("#U_bottom",0.007,{y:15,transformOrigin:"bottom bottom",ease:"none"},'-=0.007')
        .to("#N_top,#N_bottom_1",0.007,{x:8,y:-15,transformOrigin:"bottom bottom",ease:"none"},'-=0.007')
        .to("#N_bottom_2",0.007,{y:12,rotate:7,transformOrigin:"bottom bottom",ease:"none"},'-=0.007')
        .to("#N_bottom_3",0.007,{y:12,rotate:-7,transformOrigin:"bottom bottom",ease:"none"},'-=0.007')
        .to("#K_top",0.007,{y:-17,rotate:-7,transformOrigin:"bottom bottom",ease:"none"},'-=0.007')
        .to("#K_bottom_1",0.007,{x:6,y:12,rotate:7,transformOrigin:"bottom bottom",ease:"none"},'-=0.007')
        .to("#K_bottom_2,#K_bottom_3",0.007,{x:6,y:12,rotate:7,transformOrigin:"bottom bottom",ease:"none"},'-=0.007')

        //Skew logo
        .to("#Cyberpunk2077",0.02,{skewX:70,transformOrigin:"center center",ease:Power3.easeOut})
        .to("#Cyberpunk2077",0.02,{skewX:0,transformOrigin:"center center",ease:Power3.easeOut})

        //Skew logo
        .to("#Cyberpunk2077",0.02,{skewX:70,transformOrigin:"center center",ease:Power3.easeOut})
        .to("#Cyberpunk2077",0.02,{skewX:0,transformOrigin:"center center",ease:Power3.easeOut})

        //Blue Yellow glitch
            //Yellow components opacity:0
        .to("#C_top,#C_bottom,#Y_top,#Y_bottom,#BER_top,#B_bottom,#E_bottom_1,#E_bottom_2,#R_bottom,#P_top,#P_bottom,#U_top,#U_bottom,#N_top,#N_bottom_1,#N_bottom_2,#N_bottom_3,#K_top,#K_bottom_1,#K_bottom_2,#K_bottom_3",0,{opacity:0,ease:"none"})
       
            //Blue compnents opacity:1
        .to("#C_blue,#Y_blue,#BER_blue,#PU_blue,#N_blue,#K_blue",0.08,{opacity:1,ease:"none"})
            //Blue components opacity:0
        .to("#C_blue,#Y_blue,#BER_blue,#PU_blue,#N_blue,#K_blue",0.08,{opacity:0,ease:"none"})
            //Yellow components opacity:1
        .to("#C_top,#C_bottom,#Y_top,#Y_bottom,#BER_top,#B_bottom,#E_bottom_1,#E_bottom_2,#R_bottom,#P_top,#P_bottom,#U_top,#U_bottom,#N_top,#N_bottom_1,#N_bottom_2,#N_bottom_3,#K_top,#K_bottom_1,#K_bottom_2,#K_bottom_3",0.02,{opacity:1,ease:"none"})

        //Skew logo
        .to("#Cyberpunk2077",0.02,{skewX:70,transformOrigin:"center center",ease:Power3.easeOut})
        .to("#Cyberpunk2077",0.02,{skewX:0,transformOrigin:"center center",ease:Power3.easeOut})

        //Flicker phase 4 (Rotational decrease)
        .to("#C_top",2.1,{rotate:7,transformOrigin:"bottom bottom",ease:"none"},'+=0.1')
        .to("#C_bottom",2.1,{rotate:1,transformOrigin:"bottom bottom",ease:"none"},'-=2.1')
        .to("#Y_top",2.1,{rotate:2,transformOrigin:"bottom bottom",ease:"none"},'-=2.1')
        .to("#Y_bottom",2.1,{y:2,rotate:2,transformOrigin:"bottom bottom",ease:"none"},'-=2.1')
        .to("#BER_top",2.1,{y:-4,rotate:2,transformOrigin:"bottom bottom",ease:"none"},'-=2.1')
        .to("#B_bottom",2.1,{y:2,rotate:-2,transformOrigin:"bottom bottom",ease:"none"},'-=2.1')
        .to("#E_bottom_1,#E_bottom_2",2.1,{y:2,rotate:-2,transformOrigin:"bottom bottom",ease:"none"},'-=2.1')
        .to("#R_bottom",2.1,{y:-2,rotate:-1,transformOrigin:"bottom bottom",ease:"none"},'-=2.1')
        .to("#P_top",2.1,{y:-3,rotate:2,transformOrigin:"bottom bottom",ease:"none"},'-=2.1')
        .to("#P_bottom",2.1,{y:4,rotate:1,transformOrigin:"bottom bottom",ease:"none"},'-=2.1')
        .to("#U_top",2.1,{x:3,y:3,transformOrigin:"bottom bottom",ease:"none"},'-=2.1')
        .to("#U_bottom",2.1,{y:3,transformOrigin:"bottom bottom",ease:"none"},'-=2.1')
        .to("#N_top,#N_bottom_1",2.1,{x:1,y:-3,transformOrigin:"bottom bottom",ease:"none"},'-=2.1')
        .to("#N_bottom_2",2.1,{y:3,rotate:1,transformOrigin:"bottom bottom",ease:"none"},'-=2.1')
        .to("#N_bottom_3",2.1,{y:3,rotate:-1,transformOrigin:"bottom bottom",ease:"none"},'-=2.1')
        .to("#K_Top",2.1,{y:-3,rotate:-1,transformOrigin:"bottom bottom",ease:"none"},'-=2.1')
        .to("#K_bottom_1",2.1,{x:2,y:3,rotate:2,transformOrigin:"bottom bottom",ease:"none"},'-=2.1')
        .to("#K_bottom_2",2.1,{x:2,y:3,rotate:2,transformOrigin:"bottom bottom",ease:"none"},'-=2.1')
        .to("#K_bottom_3",2.1,{x:2,y:3,rotate:2,transformOrigin:"bottom bottom",ease:"none"},'-=2.1')

        //Skew logo
        .to("#Cyberpunk2077",0.02,{skewX:70,transformOrigin:"center center",ease:Power3.easeOut})
        .to("#Cyberpunk2077",0.02,{skewX:0,transformOrigin:"center center",ease:Power3.easeOut})

        //Flicker phase 5 (Rotational increase)
        .to("#C_top",0.01,{rotate:12,transformOrigin:"bottom bottom",ease:"none"})
        .to("#C_bottom",0.01,{rotate:3,transformOrigin:"bottom bottom",ease:"none"},'-=0.01')
        .to("#Y_top",0.01,{rotate:3,transformOrigin:"bottom bottom",ease:"none"},'-=0.01')
        .to("#Y_bottom",0.01,{y:6,rotate:-4,transformOrigin:"bottom bottom",ease:"none"},'-=0.01')
        .to("#BER_top",0.01,{y:-8,rotate:4,transformOrigin:"bottom bottom",ease:"none"},'-=0.01')
        .to("#B_bottom",0.01,{y:6,rotate:-5,transformOrigin:"bottom bottom",ease:"none"},'-=0.01')
        .to("#E_bottom_1,#E_bottom_2",0.01,{y:6,rotate:-5,transformOrigin:"bottom bottom",ease:"none"},'-=0.01')
        .to("#R_bottom",0.01,{y:6,rotate:-5,transformOrigin:"bottom bottom",ease:"none"},'-=0.01')
        .to("#P_top",0.01,{y:-9,rotate:-3,transformOrigin:"bottom bottom",ease:"none"},'-=0.01')
        .to("#P_bottom",0.01,{y:11,rotate:-4,transformOrigin:"bottom bottom",ease:"none"},'-=0.01')
        .to("#U_top",0.01,{x:7,y:9,transformOrigin:"bottom bottom",ease:"none"},'-=0.01')
        .to("#U_bottom",0.01,{y:9,transformOrigin:"bottom bottom",ease:"none"},'-=0.01')
        .to("#N_top,#N_bottom_1",0.01,{x:3,y:-9,transformOrigin:"bottom bottom",ease:"none"},'-=0.01')
        .to("#N_bottom_2",0.01,{y:9,rotate:5,transformOrigin:"bottom bottom",ease:"none"},'-=0.01')
        .to("#N_bottom_3",0.01,{y:9,rotate:-5,transformOrigin:"bottom bottom",ease:"none"},'-=0.01')
        .to("#K_top",0.01,{y:-19,rotate:-5,transformOrigin:"bottom bottom",ease:"none"},'-=0.01')
        .to("#K_bottom_1",0.01,{x:6,y:10,rotate:5,transformOrigin:"bottom bottom",ease:"none"},'-=0.01')
        .to("#K_bottom_2,#K_bottom_3",0.01,{x:6,y:10,rotate:5,transformOrigin:"bottom bottom",ease:"none"},'-=0.01')

        //Rejoin of Yellow components
        .to("#C_top,#C_bottom,#Y_top,#Y_bottom,#BER_top,#B_bottom,#E_bottom_1,#E_bottom_2,#R_bottom,#P_top,#P_bottom,#U_top,#U_bottom,#N_top,#N_bottom_1,#N_bottom_2,#N_bottom_3,#K_top,#K_bottom_1,#K_bottom_2,#K_bottom_3",1.61,{x:0,y:0,rotate:0,transformOrigin:"bottom bottom",ease:Power0.easeOut})

        //Reappearance of the blue parts
        .to("#C_blue,#Y_blue,#BER_blue,#PU_blue,#N_blue,#K_blue",0,{opacity:1,ease:"none"})
        .to("#C_blue,#Y_blue,#BER_blue,#PU_blue,#N_blue,#K_blue",0.02,{opacity:0,ease:"none"})
        .to("#C_blue,#Y_blue,#BER_blue,#PU_blue,#N_blue,#K_blue",0,{opacity:1,ease:"none"})
    
        //Skew logo
        .to("#Cyberpunk2077",0.02,{skewX:70,transformOrigin:"center center",ease:Power3.easeOut})
        .to("#Cyberpunk2077",0.02,{skewX:0,transformOrigin:"center center",ease:Power3.easeOut})
        
        //Skew logo
        .to("#Cyberpunk2077",0.1,{scale:1.12,transformOrigin:"center center",ease:Power3.easeOut})
        
        //Skew logo
        .to("#Cyberpunk2077",0.02,{skewX:70,transformOrigin:"center center",ease:Power3.easeOut},'+=0.2')
        .to("#Cyberpunk2077",0.02,{skewX:0,transformOrigin:"center center",ease:Power3.easeOut})
        
        //flicker of yellow parts
        .to("#C_top,#C_bottom,#Y_top,#Y_bottom,#BER_top,#B_bottom,#E_bottom_1,#E_bottom_2,#R_bottom,#P_top,#P_bottom,#U_top,#U_bottom,#N_top,#N_bottom_1,#N_bottom_2,#N_bottom_3,#K_top,#K_bottom_1,#K_bottom_2,#K_bottom_3",0,{opacity:0,ease:"none"},'+=0.1')
        .to("#C_top,#C_bottom,#Y_top,#Y_bottom,#BER_top,#B_bottom,#E_bottom_1,#E_bottom_2,#R_bottom,#P_top,#P_bottom,#U_top,#U_bottom,#N_top,#N_bottom_1,#N_bottom_2,#N_bottom_3,#K_top,#K_bottom_1,#K_bottom_2,#K_bottom_3",0.02,{opacity:1,ease:"none"})
        .to("#C_top,#C_bottom,#Y_top,#Y_bottom,#BER_top,#B_bottom,#E_bottom_1,#E_bottom_2,#R_bottom,#P_top,#P_bottom,#U_top,#U_bottom,#N_top,#N_bottom_1,#N_bottom_2,#N_bottom_3,#K_top,#K_bottom_1,#K_bottom_2,#K_bottom_3",0,{opacity:0,ease:"none"},'+=0.08')
        .to("#C_top,#C_bottom,#Y_top,#Y_bottom,#BER_top,#B_bottom,#E_bottom_1,#E_bottom_2,#R_bottom,#P_top,#P_bottom,#U_top,#U_bottom,#N_top,#N_bottom_1,#N_bottom_2,#N_bottom_3,#K_top,#K_bottom_1,#K_bottom_2,#K_bottom_3",0.02,{opacity:1,ease:"none"})
        .to("#C_top,#C_bottom,#Y_top,#Y_bottom,#BER_top,#B_bottom,#E_bottom_1,#E_bottom_2,#R_bottom,#P_top,#P_bottom,#U_top,#U_bottom,#N_top,#N_bottom_1,#N_bottom_2,#N_bottom_3,#K_top,#K_bottom_1,#K_bottom_2,#K_bottom_3",0,{opacity:0,ease:"none"},'+=0.1')
        .to("#C_top,#C_bottom,#Y_top,#Y_bottom,#BER_top,#B_bottom,#E_bottom_1,#E_bottom_2,#R_bottom,#P_top,#P_bottom,#U_top,#U_bottom,#N_top,#N_bottom_1,#N_bottom_2,#N_bottom_3,#K_top,#K_bottom_1,#K_bottom_2,#K_bottom_3",0.02,{opacity:1,ease:"none"})
        .to("#C_top,#C_bottom,#Y_top,#Y_bottom,#BER_top,#B_bottom,#E_bottom_1,#E_bottom_2,#R_bottom,#P_top,#P_bottom,#U_top,#U_bottom,#N_top,#N_bottom_1,#N_bottom_2,#N_bottom_3,#K_top,#K_bottom_1,#K_bottom_2,#K_bottom_3",0,{opacity:0,ease:"none"},'+=0.08')
        .to("#C_top,#C_bottom,#Y_top,#Y_bottom,#BER_top,#B_bottom,#E_bottom_1,#E_bottom_2,#R_bottom,#P_top,#P_bottom,#U_top,#U_bottom,#N_top,#N_bottom_1,#N_bottom_2,#N_bottom_3,#K_top,#K_bottom_1,#K_bottom_2,#K_bottom_3",0.02,{opacity:1,ease:"none"});
    
        

    return cyberpunk;
}
function n2077(){
    var tl2077= new TimelineMax();

    var _2077 = new TimelineMax();
    _2077
        //Setting initial attributes 
        .set("#n2077",{opacity:1,scale:1.12})
        .set("#n0,#n71,#n72,#n72,#endpoint_1,#endpoint_2",{opacity:0})

        //number 2 flicker appearance
        .to("#n2",0.06,{opacity:0,ease:"none"})
        .to("#n2",0.06,{opacity:1,ease:"none"})
        .to("#n2",0.06,{opacity:0,ease:"none"})
        .to("#n2",0.06,{opacity:1,ease:"none"})
        .to("#n2",0.06,{opacity:0,ease:"none"})
        .to("#n2",0.06,{opacity:1,ease:"none"})
        .to("#n2",0.06,{opacity:1,ease:"none"})

        //number 0 flicker appearance
        .to("#n0,#endpoint_1",0.06,{opacity:0,ease:"none"},'+=0.1')
        .to("#n0,#endpoint_1",0.06,{opacity:1,ease:"none"})
        .to("#n0,#endpoint_1",0.06,{opacity:0,ease:"none"})
        .to("#n0,#endpoint_1",0.06,{opacity:1,ease:"none"})
        .to("#n0,#endpoint_1",0.06,{opacity:0,ease:"none"})
        .to("#n0,#endpoint_1",0.06,{opacity:1,ease:"none"})
        .to("#n0,#endpoint_1",0.06,{opacity:1,ease:"none"})

        //2,0 Skew
        .to("#n2077",0.02,{skewX:70,transformOrigin:"center center",ease:Power3.easeOut},'+=0.2')
        .to("#n2077",0.02,{skewX:0,transformOrigin:"center center",ease:Power3.easeOut})
        .to("#n2077",0.02,{skewX:70,transformOrigin:"center center",ease:Power3.easeOut})
        .to("#n2077",0.02,{skewX:0,transformOrigin:"center center",ease:Power3.easeOut})

        //number 7_1 flicker appearance
        .to("#n71,#endpoint_2",0.06,{opacity:0,ease:"none"},'+=0.1')
        .to("#n71,#endpoint_2",0.06,{opacity:1,ease:"none"})
        .to("#n71,#endpoint_2",0.06,{opacity:0,ease:"none"})
        .to("#n71,#endpoint_2",0.06,{opacity:1,ease:"none"})
        .to("#n71,#endpoint_2",0.06,{opacity:0,ease:"none"})
        .to("#n71,#endpoint_2",0.06,{opacity:1,ease:"none"})
        .to("#n71,#endpoint_2",0.06,{opacity:1,ease:"none"})
        
        //number 7_2 flicker appearance
        .to("#n72",0.06,{opacity:0,ease:"none"},'+=0.1')
        .to("#n72",0.06,{opacity:1,ease:"none"})
        .to("#n72",0.06,{opacity:0,ease:"none"})
        .to("#n72",0.06,{opacity:1,ease:"none"})
        .to("#n72",0.06,{opacity:0,ease:"none"})
        .to("#n72",0.06,{opacity:1,ease:"none"})
        .to("#n72",0.06,{opacity:1,ease:"none"})

        //Repositioning effect
        .to("#n2077",0,{opacity:0,y:20,transformOrigin:"center center",ease:"none"},'+=0.02')
        .to("#n2077",0.02,{opacity:1})
        .to("#n2077",0,{opacity:0,x:5,y:10,transformOrigin:"center center",ease:Power3.easeOut},'+=0.1')
        .to("#n2077",0.02,{opacity:1})

        //Skew effect
        .to("#n2077",0.02,{skewX:70,transformOrigin:"center center",ease:Power3.easeOut},'+=0.02')
        .to("#n2077",0.02,{skewX:0,transformOrigin:"center center",ease:Power3.easeOut})
        .to("#n2077",0,{opacity:0,x:0,y:0,transformOrigin:"center center",ease:Power3.easeOut})
        .to("#n2077",0.02,{opacity:1})
        .to("#n2077",0.02,{skewX:70,transformOrigin:"center center",ease:Power3.easeOut},'+=0.02')
        .to("#n2077",0.02,{skewX:0,transformOrigin:"center center",ease:Power3.easeOut});
    
    //Skew effect on small particles aling X axis
    var tlParticlesX = new TimelineMax({repeat:-1});
        tlParticlesX
            .to("#particleGroup1",0.02,{skewX:170,ease:"none"})
            .to("#particleGroup1",0.02,{skewX:0,ease:"none"})
            .to("#particleGroup2",0.02,{skewX:170,ease:"none"},0)
            .to("#particleGroup2",0.02,{skewX:0,ease:"none"})
            .to("#particleGroup3",0.02,{skewX:170,ease:"none"},0)
            .to("#particleGroup3",0.02,{skewX:0,ease:"none"})
            .to("#particleGroup4",0.02,{skewX:100,ease:"none"},0)
            .to("#particleGroup4",0.02,{skewX:0,ease:"none"})
            .to("#particleGroup5",0.02,{skewX:-200,ease:"none"},0)
            .to("#particleGroup5",0.02,{skewX:0,ease:"none"})
            .to("#particleGroup6",0.02,{skewX:-200,ease:"none"},0)
            .to("#particleGroup6",0.02,{skewX:0,ease:"none"});
    
    //Skew effect on small particles aling Y axis
    var tlParticlesY = new TimelineMax({repeat:-1});
        tlParticlesY
            .to("#particleGroup1",0.01,{y:-10,ease:"none"})
            .to("#particleGroup1",0.01,{opacity:0,ease:"none"})
            .to("#particleGroup1",0.01,{y:0,ease:"none"})
            .to("#particleGroup1",0.01,{opacity:0,ease:"none"})
            .to("#particleGroup1",0.01,{y:10,ease:"none"})

            .to("#particleGroup2",0.01,{y:-10,ease:"none"},0)
            .to("#particleGroup2",0.01,{opacity:0,ease:"none"})
            .to("#particleGroup2",0.01,{y:0,ease:"none"})
            .to("#particleGroup2",0.01,{opacity:0,ease:"none"})
            .to("#particleGroup2",0.01,{y:10,ease:"none"})

            .to("#particleGroup3",0.01,{y:-10,ease:"none"},0)
            .to("#particleGroup3",0.01,{opacity:0,ease:"none"})
            .to("#particleGroup3",0.01,{y:0,ease:"none"})
            .to("#particleGroup3",0.01,{opacity:0,ease:"none"})
            .to("#particleGroup3",0.01,{y:10,ease:"none"})
            
            .to("#particleGroup4",0.01,{y:-5,ease:"none"},0)
            .to("#particleGroup4",0.01,{opacity:0,ease:"none"})
            .to("#particleGroup4",0.01,{y:0,ease:"none"})
            .to("#particleGroup4",0.01,{opacity:0,ease:"none"})
            .to("#particleGroup4",0.01,{y:-15,ease:"none"})
            
            .to("#particleGroup5",0.01,{y:10,ease:"none"},0)
            .to("#particleGroup5",0.01,{opacity:0,ease:"none"})
            .to("#particleGroup5",0.01,{y:0,ease:"none"})
            .to("#particleGroup5",0.01,{opacity:0,ease:"none"})
            .to("#particleGroup5",0.01,{y:-10,ease:"none"})

            .to("#particleGroup6",0.01,{y:5,ease:"none"},0)
            .to("#particleGroup6",0.01,{opacity:0,ease:"none"})
            .to("#particleGroup6",0.01,{y:0,ease:"none"})
            .to("#particleGroup6",0.01,{opacity:0,ease:"none"})
            .to("#particleGroup6",0.01,{y:15,ease:"none"})
            ;

    var tlLines = new TimelineMax({repeat:-1});
    var tlLines1= new TimelineMax();
    var tlLines2= new TimelineMax();
    var tlLines3= new TimelineMax();
        tlLines1
            //Setting all lines to 0 opacity
            .set("#line1",{opacity:0})
            .set("#line2",{opacity:0})
            .set("#line3",{opacity:0})
            .set("#line4",{opacity:0})
            .set("#line5",{opacity:0})
            .set("#line6",{opacity:0})
            .set("#line7",{opacity:0})
            .set("#line8",{opacity:0})
            .set("#line9",{opacity:0})
            .set("#line10",{opacity:0})
            .set("#line11",{opacity:0})
            .set("#line12",{opacity:0})
            .set("#line13",{opacity:0})
            .set("#line14",{opacity:0})
            .set("#line16",{opacity:0})
            .set("#line18",{opacity:0})
            .set("#line19",{opacity:0})
            .set("#line20",{opacity:0})
            .set("#line21",{opacity:0})
            .set("#line22",{opacity:0})
            .set("#line23",{opacity:0})
            .set("#line24",{opacity:0})

            //First appearance in the original position
            .to("#line1",0.6,{opacity:1},0)
            .to("#line2",0.06,{opacity:1},0)
            .to("#line3",0.06,{opacity:1},0)
            .to("#line4",0.06,{opacity:1},0)
            .to("#line5",0.06,{opacity:1},0)
            .to("#line6",0.06,{opacity:1},0)
            .to("#line10",0.06,{opacity:1},0)
            .to("#line11",0.06,{opacity:1},0)
            .to("#line12",0.06,{opacity:1},0)
            .to("#line13",0.06,{opacity:1},0)
            .to("#line14",0.06,{opacity:1},0)
            .to("#line16",0.06,{opacity:1},0)
            .to("#line18",0.06,{opacity:1},0)
            .to("#line19",0.06,{opacity:1},0)
            .to("#line20",0.06,{opacity:1},0)
            .to("#line21",0.06,{opacity:1},0)
            .to("#line22",0.06,{opacity:1},0)
            .to("#line23",0.06,{opacity:1},0)
            .to("#line24",0.06,{opacity:1},0)

            //First dissapearance and displacement of the lines 
            .to("#line1",0,{opacity:0},'+=0.6')
            .to("#line2",0,{y:3,x:5,scaleX:2,opacity:0})
            .to("#line3",0,{x:5,scaleX:0.5,opacity:0})
            .to("#line4",0,{x:-5,y:-4,scaleX:0.5,opacity:0})
            .to("#line5",0,{x:5,y:-4,scaleX:1.3,opacity:0})
            .to("#line6",0,{x:7,y:4,scaleX:1.6,opacity:0})
            .to("#line10",0,{x:4,y:-4,scaleX:1.6,opacity:0})
            .to("#line11",0,{x:-2,y:1,scaleX:1.6,opacity:0})
            .to("#line12",0,{x:2,y:-1,scaleX:1.6,opacity:0})
            .to("#line13",0,{x:-5,y:3,scaleX:1.6,opacity:0})
            .to("#line14",0,{x:-5,y:-1,scaleX:1.6,opacity:0})
            .to("#line16",0,{x:-5,y:-1,scaleX:1.6,opacity:0})
            .to("#line18",0,{x:-13,y:-4,scaleX:1.6,opacity:0})
            .to("#line19",0,{x:-3,y:2,scaleX:1.6,opacity:0})
            .to("#line20",0,{x:-3,y:2,scaleX:1.6,opacity:0})
            .to("#line21",0,{x:0,y:-1,scaleX:1.6,opacity:0})
            .to("#line22",0,{x:5,y:2,scaleY:1.2,scaleX:1.2,opacity:0})
            .to("#line23",0,{x:5,y:2,scaleY:1.2,scaleX:1.2,opacity:0})
            .to("#line24",0,{x:15,y:2,scaleX:1.2,opacity:0})

            //First appearance of the displaced lines 
            .to("#line1",0.24,{opacity:1})
            .to("#line2",0.24,{opacity:1},'-=0.24')
            .to("#line3",0.24,{opacity:1},'-=0.24')
            .to("#line4",0.24,{opacity:1},'-=0.24')
            .to("#line5",0.24,{opacity:1},'-=0.24')
            .to("#line6",0.24,{opacity:1},'-=0.24')
            .to("#line10",0.24,{opacity:1},'-=0.24')
            .to("#line11",0.24,{opacity:1},'-=0.24')
            .to("#line12",0.24,{opacity:1},'-=0.24')
            .to("#line13",0.24,{opacity:1},'-=0.24')
            .to("#line14",0.24,{opacity:1},'-=0.24')
            .to("#line16",0.24,{opacity:1},'-=0.24')
            .to("#line18",0.24,{opacity:1},'-=0.24')
            .to("#line19",0.24,{opacity:1},'-=0.24')
            .to("#line20",0.24,{opacity:1},'-=0.24')
            .to("#line21",0.24,{opacity:1},'-=0.24')
            .to("#line22",0.24,{opacity:1},'-=0.24')
            .to("#line23",0.24,{opacity:1},'-=0.24')
            .to("#line24",0.24,{opacity:1},'-=0.24')

            //Second dissapearance and displacement of the lines
            .to("#line1",0,{y:3,opacity:0,scaleX:0.3},'+=0.6')
            .to("#line2",0,{y:3,opacity:0,scaleX:0.3})
            .to("#line3",0,{x:5,y:-6,opacity:0,scaleX:1.3})
            .to("#line4",0,{x:-2,y:-1,opacity:0,scaleX:0.3})
            .to("#line5",0,{x:3,y:1,opacity:0,scaleX:0.3})
            .to("#line6",0,{x:4,y:11,opacity:0,scaleX:1.3})
            .to("#line10",0,{x:2,y:-5,opacity:0,scaleX:0.7})
            .to("#line11",0,{x:0,y:3,opacity:0,scaleX:0.7})
            .to("#line12",0,{x:4,y:-3,opacity:0,scaleX:0.7})
            .to("#line13",0,{x:-4,y:3,opacity:0,scaleX:0.7})
            .to("#line14",0,{x:-3,y:3,opacity:0,scaleX:0.7})
            .to("#line16",0,{x:-3,y:-3,opacity:0,scaleX:0.7})
            .to("#line18",0,{x:-2,y:0,opacity:0,scaleX:0.7})
            .to("#line19",0,{x:-4,y:2,opacity:0,scaleX:0.7})
            .to("#line20",0,{x:-4,y:-2,opacity:0,scaleX:0.7})
            .to("#line21",0,{x:-4,y:2,opacity:0,scaleX:0.7})
            .to("#line22",0,{x:-2,y:5,opacity:0,scaleX:0.7})
            .to("#line23",0,{x:-2,y:5,opacity:0,scaleX:0.7})
            .to("#line24",0,{x:-2,y:-10,opacity:0,scaleX:0.7})

            //Second appearance of the displaced lines
            .to("#line1",0.2,{opacity:1})
            .to("#line2",0.2,{opacity:1},'-=0.2')
            .to("#line3",0.2,{opacity:1},'-=0.2')
            .to("#line4",0.2,{opacity:1},'-=0.2')
            .to("#line5",0.2,{opacity:1},'-=0.2')
            .to("#line6",0.2,{opacity:1},'-=0.2')
            .to("#line10",0.2,{opacity:1},'-=0.2')
            .to("#line11",0.2,{opacity:1},'-=0.2')
            .to("#line12",0.2,{opacity:1},'-=0.2')
            .to("#line13",0.2,{opacity:1},'-=0.2')
            .to("#line14",0.2,{opacity:1},'-=0.2')
            .to("#line16",0.2,{opacity:1},'-=0.2')
            .to("#line18",0.2,{opacity:1},'-=0.2')
            .to("#line19",0.2,{opacity:1},'-=0.2')
            .to("#line20",0.2,{opacity:1},'-=0.2')
            .to("#line21",0.2,{opacity:1},'-=0.2')
            .to("#line22",0.2,{opacity:1},'-=0.2')
            .to("#line23",0.2,{opacity:1},'-=0.2')
            .to("#line24",0.2,{opacity:1},'-=0.2')

            //Third dissapearance and displacement of the lines
            .to("#line1",0,{x:5,y:7,opacity:0,scaleX:1.1},'+=0.02')
            .to("#line2",0,{x:5,y:-2,opacity:0,scaleX:1.1})
            .to("#line3",0,{x:5,y:-7,opacity:0,scaleX:1.1})
            .to("#line4",0,{x:1,y:1,opacity:0,scaleX:1.1})
            .to("#line5",0,{x:1,y:-4,opacity:0,scaleX:1.1})
            .to("#line6",0,{x:1,y:-7,opacity:0,scaleX:1.1})
            .to("#line10",0,{x:2,y:-7,opacity:0,scaleX:1.1})
            .to("#line11",0,{x:-3,y:2,opacity:0,scaleX:1.1})
            .to("#line12",0,{x:3,y:-2,opacity:0,scaleX:1.1})
            .to("#line13",0,{x:-3,y:2,opacity:0,scaleX:1.1})
            .to("#line14",0,{x:-3,y:2,opacity:0,scaleX:1.1})
            .to("#line16",0,{x:-6,y:-1,opacity:0,scaleX:1.1})
            .to("#line18",0,{x:-2,y:0,opacity:0,scaleX:1.1})
            .to("#line19",0,{x:-3,y:0,opacity:0,scaleX:1.1})
            .to("#line20",0,{x:-3,y:0,opacity:0,scaleX:1.1})
            .to("#line21",0,{x:-3,y:0,opacity:0,scaleX:1.1})
            .to("#line22",0,{x:-4,y:4,opacity:0,scaleX:1.1})
            .to("#line23",0,{x:-4,y:4,opacity:0,scaleX:1.1})
            .to("#line24",0,{x:0,y:4,opacity:0,scaleX:1.1})
            
            //Third appearance of the displaced lines
            .to("#line1",0.2,{opacity:1})
            .to("#line2",0.2,{opacity:1},'-=0.2')
            .to("#line3",0.2,{opacity:1},'-=0.2')
            .to("#line4",0.2,{opacity:1},'-=0.2')
            .to("#line5",0.2,{opacity:1},'-=0.2')
            .to("#line6",0.2,{opacity:1},'-=0.2')
            .to("#line10",0.2,{opacity:1},'-=0.2')
            .to("#line11",0.2,{opacity:1},'-=0.2')
            .to("#line12",0.2,{opacity:1},'-=0.2')
            .to("#line13",0.2,{opacity:1},'-=0.2')
            .to("#line14",0.2,{opacity:1},'-=0.2')
            .to("#line16",0.2,{opacity:1},'-=0.2')
            .to("#line18",0.2,{opacity:1},'-=0.2')
            .to("#line19",0.2,{opacity:1},'-=0.2')
            .to("#line20",0.2,{opacity:1},'-=0.2')
            .to("#line21",0.2,{opacity:1},'-=0.2')
            .to("#line22",0.2,{opacity:1},'-=0.2')
            .to("#line23",0.2,{opacity:1},'-=0.2')
            .to("#line24",0.2,{opacity:1},'-=0.2')

            //Fourth dissapearance and displacement of the lines
            .to("#line1",0,{x:-2,y:4,opacity:0,scaleX:1.1},'+=0.02')
            .to("#line2",0,{x:-2,y:4,opacity:0,scaleX:1.1})
            .to("#line3",0,{x:-2,y:-10,opacity:0,scaleX:1.1},0)
            .to("#line4",0,{x:-2,y:-7,opacity:0,scaleX:1.1},0)
            .to("#line5",0,{x:2,y:-5,opacity:0,scaleX:1.1},0)
            .to("#line6",0,{x:4,y:-5,opacity:0,scaleX:1.1},0)
            .to("#line10",0,{x:4,y:-3,opacity:0,scaleX:1.1},0)
            .to("#line11",0,{x:-4,y:-1,opacity:0,scaleX:1.1},0)
            .to("#line12",0,{x:4,y:-1,opacity:0,scaleX:1.1},0)
            .to("#line13",0,{x:-1,y:-4,opacity:0,scaleX:1.1},0)
            .to("#line14",0,{x:-2,y:4,opacity:0,scaleX:1.1},0)
            .to("#line16",0,{x:-2,y:2,opacity:0,scaleX:1.1},0)
            .to("#line18",0,{x:-10,y:-2,opacity:0,scaleX:1.1},0)
            .to("#line19",0,{x:-4,y:-4,opacity:0,scaleX:1.1},0)
            .to("#line20",0,{x:-14,y:2,opacity:0,scaleX:1.1},0)
            .to("#line21",0,{x:-1,y:2,opacity:0,scaleX:1.1},0)
            .to("#line22",0,{x:4,y:-3,opacity:0,scaleX:1.1},0)
            .to("#line23",0,{x:4,y:-3,opacity:0,scaleX:1.1},0)
            .to("#line24",0,{x:-4,y:15,opacity:0,scaleX:1.1},0)

            //Fourth  appearance of the displaced lines
            .to("#line1",0.2,{opacity:1})
            .to("#line2",0.2,{opacity:1},'-=0.2')
            .to("#line3",0.2,{opacity:1},'-=0.2')
            .to("#line4",0.2,{opacity:1},'-=0.2')
            .to("#line5",0.2,{opacity:1},'-=0.2')
            .to("#line6",0.2,{opacity:1},'-=0.2')
            .to("#line10",0.2,{opacity:1},'-=0.2')
            .to("#line11",0.2,{opacity:1},'-=0.2')
            .to("#line12",0.2,{opacity:1},'-=0.2')
            .to("#line13",0.2,{opacity:1},'-=0.2')
            .to("#line14",0.2,{opacity:1},'-=0.2')
            .to("#line16",0.2,{opacity:1},'-=0.2')
            .to("#line18",0.2,{opacity:1},'-=0.2')
            .to("#line19",0.2,{opacity:1},'-=0.2')
            .to("#line20",0.2,{opacity:1},'-=0.2')
            .to("#line21",0.2,{opacity:1},'-=0.2')
            .to("#line22",0.2,{opacity:1},'-=0.2')
            .to("#line23",0.2,{opacity:1},'-=0.2')
            .to("#line24",0.2,{opacity:1},'-=0.2')

            //Final dissapearance and moving all lines to original position
            .to("#line1",0,{x:0,y:0,opacity:0},'+=0.02')
            .to("#line2",0,{x:0,y:0,opacity:0})
            .to("#line3",0,{x:0,y:0,opacity:0})
            .to("#line4",0,{x:0,y:0,opacity:0})
            .to("#line5",0,{x:0,y:0,opacity:0})
            .to("#line6",0,{x:0,y:0,opacity:0})
            .to("#line10",0,{x:0,y:0,opacity:0})
            .to("#line11",0,{x:0,y:0,opacity:0})
            .to("#line12",0,{x:0,y:0,opacity:0})
            .to("#line13",0,{x:0,y:0,opacity:0})
            .to("#line14",0,{x:0,y:0,opacity:0})
            .to("#line16",0,{x:0,y:0,opacity:0})
            .to("#line18",0,{x:0,y:0,opacity:0})
            .to("#line19",0,{x:0,y:0,opacity:0})
            .to("#line20",0,{x:0,y:0,opacity:0})
            .to("#line21",0,{x:0,y:0,opacity:0})
            .to("#line22",0,{x:0,y:0,opacity:0})
            .to("#line23",0,{x:0,y:0,opacity:0})
            .to("#line24",0,{x:0,y:0,opacity:0})
            
            //Glitch effect for 2077 and particles
            .to("#n2077",0.01,{skewX:70,transformOrigin:"center center",ease:Power3.easeOut})
            .to("#n2077",0.01,{skewX:0,transformOrigin:"center center",ease:Power3.easeOut})

            .to("#n2077",0.01,{skewX:70,transformOrigin:"center center",ease:Power3.easeOut})
            .to("#n2077",0.01,{skewX:0,transformOrigin:"center center",ease:Power3.easeOut})
            .to("#n2077",0.01,{skewX:-70,transformOrigin:"center center",ease:Power3.easeOut})
            .to("#n2077",0.01,{skewX:0,transformOrigin:"center center",ease:Power3.easeOut})

            .to("#n2077",0.01,{skewX:70,transformOrigin:"center center",ease:Power3.easeOut})
            .to("#n2077",0.01,{skewX:0,transformOrigin:"center center",ease:Power3.easeOut})
    
            
    //Timeline for line segment 2
    tlLines2
         //Setting all lines to 0 opacity
         .set("#line25",{opacity:0})
            .set("#line26",{opacity:0})
            .set("#line27",{opacity:0})
            .set("#line28",{opacity:0})
            .set("#line29",{opacity:0})
            .set("#line30",{opacity:0})
            .set("#line31",{opacity:0})
            .set("#line32",{opacity:0})
            .set("#line33",{opacity:0})
            .set("#line34",{opacity:0})
            .set("#line35",{opacity:0})
            .set("#line36",{opacity:0})
            .set("#line37",{opacity:0})
            .set("#line38",{opacity:0})
            .set("#line39",{opacity:0})
            .set("#line40",{opacity:0})
            .set("#line41",{opacity:0})
            .set("#line42",{opacity:0})
            

            //First appearance in the original position
            .to("#line25",0.6,{opacity:1},0)
            .to("#line26",0.06,{opacity:1},0)
            .to("#line27",0.06,{opacity:1},0)
            .to("#line28",0.06,{opacity:1},0)
            .to("#line29",0.06,{opacity:1},0)
            .to("#line30",0.06,{opacity:1},0)
            .to("#line31",0.06,{opacity:1},0)
            .to("#line32",0.06,{opacity:1},0)
            .to("#line33",0.06,{opacity:1},0)
            .to("#line34",0.06,{opacity:1},0)
            .to("#line35",0.06,{opacity:1},0)
            .to("#line36",0.06,{opacity:1},0)
            .to("#line37",0.06,{opacity:1},0)
            .to("#line38",0.06,{opacity:1},0)
            .to("#line39",0.06,{opacity:1},0)
            .to("#line40",0.06,{opacity:1},0)
            .to("#line41",0.06,{opacity:1},0)
            .to("#line42",0.06,{opacity:1},0)

            //First dissapearance and displacement of the lines 
            .to("#line25",0,{opacity:0},'+=0.6')
            .to("#line26",0,{y:3,x:5,scaleX:2,opacity:0})
            .to("#line27",0,{x:5,scaleX:0.5,opacity:0})
            .to("#line28",0,{x:-5,y:-4,scaleX:0.5,opacity:0})
            .to("#line29",0,{x:5,y:-4,scaleX:1.3,opacity:0})
            .to("#line30",0,{x:7,y:4,scaleX:1.6,opacity:0})
            .to("#line31",0,{x:4,y:-4,scaleX:1.6,opacity:0})
            .to("#line32",0,{x:-2,y:1,scaleX:1.6,opacity:0})
            .to("#line33",0,{x:2,y:-1,scaleX:1.6,opacity:0})
            .to("#line34",0,{x:-5,y:3,scaleX:1.6,opacity:0})
            .to("#line35",0,{x:-5,y:-1,scaleX:1.6,opacity:0})
            .to("#line36",0,{x:-5,y:-1,scaleX:1.6,opacity:0})
            .to("#line37",0,{x:-13,y:-4,scaleX:1.6,opacity:0})
            .to("#line38",0,{x:-3,y:2,scaleX:1.6,opacity:0})
            .to("#line39",0,{x:-3,y:2,scaleX:1.6,opacity:0})
            .to("#line40",0,{x:0,y:-1,scaleX:1.6,opacity:0})
            .to("#line41",0,{x:5,y:2,scaleY:1.2,scaleX:1.2,opacity:0})
            .to("#line42",0,{x:5,y:2,scaleY:1.2,scaleX:1.2,opacity:0})

            //First appearance of the displaced lines 
            .to("#line25",0.24,{opacity:1})
            .to("#line26",0.24,{opacity:1},'-=0.24')
            .to("#line27",0.24,{opacity:1},'-=0.24')
            .to("#line28",0.24,{opacity:1},'-=0.24')
            .to("#line29",0.24,{opacity:1},'-=0.24')
            .to("#line30",0.24,{opacity:1},'-=0.24')
            .to("#line31",0.24,{opacity:1},'-=0.24')
            .to("#line32",0.24,{opacity:1},'-=0.24')
            .to("#line33",0.24,{opacity:1},'-=0.24')
            .to("#line34",0.24,{opacity:1},'-=0.24')
            .to("#line35",0.24,{opacity:1},'-=0.24')
            .to("#line36",0.24,{opacity:1},'-=0.24')
            .to("#line37",0.24,{opacity:1},'-=0.24')
            .to("#line38",0.24,{opacity:1},'-=0.24')
            .to("#line39",0.24,{opacity:1},'-=0.24')
            .to("#line40",0.24,{opacity:1},'-=0.24')
            .to("#line41",0.24,{opacity:1},'-=0.24')
            .to("#line42",0.24,{opacity:1},'-=0.24')

            //Second dissapearance and displacement of the lines
            .to("#line25",0,{y:3,opacity:0,scaleX:0.3},'+=0.6')
            .to("#line26",0,{y:3,opacity:0,scaleX:0.3})
            .to("#line27",0,{x:5,y:-6,opacity:0,scaleX:1.3})
            .to("#line28",0,{x:-2,y:-1,opacity:0,scaleX:0.3})
            .to("#line29",0,{x:3,y:1,opacity:0,scaleX:0.3})
            .to("#line30",0,{x:4,y:11,opacity:0,scaleX:1.3})
            .to("#line31",0,{x:2,y:-5,opacity:0,scaleX:0.7})
            .to("#line32",0,{x:0,y:3,opacity:0,scaleX:0.7})
            .to("#line33",0,{x:4,y:-3,opacity:0,scaleX:0.7})
            .to("#line34",0,{x:-4,y:3,opacity:0,scaleX:0.7})
            .to("#line35",0,{x:-3,y:3,opacity:0,scaleX:0.7})
            .to("#line36",0,{x:-3,y:-3,opacity:0,scaleX:0.7})
            .to("#line39",0,{x:-2,y:0,opacity:0,scaleX:0.7})
            .to("#line40",0,{x:-4,y:2,opacity:0,scaleX:0.7})
            .to("#line41",0,{x:-4,y:-2,opacity:0,scaleX:0.7})
            .to("#line42",0,{x:-4,y:2,opacity:0,scaleX:0.7})
          

            //Second appearance of the displaced lines
            .to("#line25",0.2,{opacity:1})
            .to("#line26",0.2,{opacity:1},'-=0.2')
            .to("#line27",0.2,{opacity:1},'-=0.2')
            .to("#line28",0.2,{opacity:1},'-=0.2')
            .to("#line29",0.2,{opacity:1},'-=0.2')
            .to("#line30",0.2,{opacity:1},'-=0.2')
            .to("#line31",0.2,{opacity:1},'-=0.2')
            .to("#line32",0.2,{opacity:1},'-=0.2')
            .to("#line33",0.2,{opacity:1},'-=0.2')
            .to("#line34",0.2,{opacity:1},'-=0.2')
            .to("#line35",0.2,{opacity:1},'-=0.2')
            .to("#line36",0.2,{opacity:1},'-=0.2')
            .to("#line37",0.2,{opacity:1},'-=0.2')
            .to("#line38",0.2,{opacity:1},'-=0.2')
            .to("#line39",0.2,{opacity:1},'-=0.2')
            .to("#line40",0.2,{opacity:1},'-=0.2')
            .to("#line41",0.2,{opacity:1},'-=0.2')
            .to("#line42",0.2,{opacity:1},'-=0.2')

            //Third dissapearance and displacement of the lines
            .to("#line25",0,{x:5,y:7,opacity:0,scaleX:1.1},'+=0.02')
            .to("#line26",0,{x:5,y:-2,opacity:0,scaleX:1.1})
            .to("#line27",0,{x:5,y:-7,opacity:0,scaleX:1.1})
            .to("#line28",0,{x:1,y:1,opacity:0,scaleX:1.1})
            .to("#line29",0,{x:1,y:-4,opacity:0,scaleX:1.1})
            .to("#line30",0,{x:1,y:-7,opacity:0,scaleX:1.1})
            .to("#line31",0,{x:2,y:-7,opacity:0,scaleX:1.1})
            .to("#line32",0,{x:-3,y:2,opacity:0,scaleX:1.1})
            .to("#line33",0,{x:3,y:-2,opacity:0,scaleX:1.1})
            .to("#line34",0,{x:-3,y:2,opacity:0,scaleX:1.1})
            .to("#line35",0,{x:-3,y:2,opacity:0,scaleX:1.1})
            .to("#line36",0,{x:-6,y:-1,opacity:0,scaleX:1.1})
            .to("#line37",0,{x:-2,y:0,opacity:0,scaleX:1.1})
            .to("#line38",0,{x:-3,y:0,opacity:0,scaleX:1.1})
            .to("#line39",0,{x:-3,y:0,opacity:0,scaleX:1.1})
            .to("#line40",0,{x:-3,y:0,opacity:0,scaleX:1.1})
            .to("#line41",0,{x:-4,y:4,opacity:0,scaleX:1.1})
            .to("#line42",0,{x:-4,y:4,opacity:0,scaleX:1.1})
            
            //Third appearance of the displaced lines
            .to("#line25",0.2,{opacity:1})
            .to("#line26",0.2,{opacity:1},'-=0.2')
            .to("#line27",0.2,{opacity:1},'-=0.2')
            .to("#line28",0.2,{opacity:1},'-=0.2')
            .to("#line29",0.2,{opacity:1},'-=0.2')
            .to("#line30",0.2,{opacity:1},'-=0.2')
            .to("#line31",0.2,{opacity:1},'-=0.2')
            .to("#line32",0.2,{opacity:1},'-=0.2')
            .to("#line33",0.2,{opacity:1},'-=0.2')
            .to("#line34",0.2,{opacity:1},'-=0.2')
            .to("#line35",0.2,{opacity:1},'-=0.2')
            .to("#line36",0.2,{opacity:1},'-=0.2')
            .to("#line37",0.2,{opacity:1},'-=0.2')
            .to("#line38",0.2,{opacity:1},'-=0.2')
            .to("#line39",0.2,{opacity:1},'-=0.2')
            .to("#line40",0.2,{opacity:1},'-=0.2')
            .to("#line41",0.2,{opacity:1},'-=0.2')
            .to("#line42",0.2,{opacity:1},'-=0.2')

            //Fourth dissapearance and displacement of the lines
            .to("#line25",0,{x:-2,y:4,opacity:0,scaleX:1.1},'+=0.02')
            .to("#line26",0,{x:-2,y:4,opacity:0,scaleX:1.1})
            .to("#line27",0,{x:-2,y:-10,opacity:0,scaleX:1.1},0)
            .to("#line28",0,{x:-2,y:-7,opacity:0,scaleX:1.1},0)
            .to("#line29",0,{x:2,y:-5,opacity:0,scaleX:1.1},0)
            .to("#line30",0,{x:4,y:-5,opacity:0,scaleX:1.1},0)
            .to("#line31",0,{x:4,y:-3,opacity:0,scaleX:1.1},0)
            .to("#line32",0,{x:-4,y:-1,opacity:0,scaleX:1.1},0)
            .to("#line33",0,{x:4,y:-1,opacity:0,scaleX:1.1},0)
            .to("#line34",0,{x:-1,y:-4,opacity:0,scaleX:1.1},0)
            .to("#line35",0,{x:-2,y:4,opacity:0,scaleX:1.1},0)
            .to("#line36",0,{x:-2,y:2,opacity:0,scaleX:1.1},0)
            .to("#line37",0,{x:-10,y:-2,opacity:0,scaleX:1.1},0)
            .to("#line38",0,{x:-4,y:-4,opacity:0,scaleX:1.1},0)
            .to("#line39",0,{x:-14,y:2,opacity:0,scaleX:1.1},0)
            .to("#line40",0,{x:-1,y:2,opacity:0,scaleX:1.1},0)
            .to("#line41",0,{x:4,y:-3,opacity:0,scaleX:1.1},0)
            .to("#line42",0,{x:4,y:-3,opacity:0,scaleX:1.1},0)

            //Fourth  appearance of the displaced lines
            .to("#line25",0.2,{opacity:1})
            .to("#line26",0.2,{opacity:1},'-=0.2')
            .to("#line27",0.2,{opacity:1},'-=0.2')
            .to("#line28",0.2,{opacity:1},'-=0.2')
            .to("#line29",0.2,{opacity:1},'-=0.2')
            .to("#line30",0.2,{opacity:1},'-=0.2')
            .to("#line31",0.2,{opacity:1},'-=0.2')
            .to("#line32",0.2,{opacity:1},'-=0.2')
            .to("#line33",0.2,{opacity:1},'-=0.2')
            .to("#line34",0.2,{opacity:1},'-=0.2')
            .to("#line35",0.2,{opacity:1},'-=0.2')
            .to("#line36",0.2,{opacity:1},'-=0.2')
            .to("#line37",0.2,{opacity:1},'-=0.2')
            .to("#line38",0.2,{opacity:1},'-=0.2')
            .to("#line39",0.2,{opacity:1},'-=0.2')
            .to("#line40",0.2,{opacity:1},'-=0.2')
            .to("#line41",0.2,{opacity:1},'-=0.2')
            .to("#line42",0.2,{opacity:1},'-=0.2')

            //Final dissapearance and moving all lines to original position
            .to("#line25",0,{x:0,y:0,opacity:0},'+=0.02')
            .to("#line26",0,{x:0,y:0,opacity:0})
            .to("#line27",0,{x:0,y:0,opacity:0})
            .to("#line28",0,{x:0,y:0,opacity:0})
            .to("#line29",0,{x:0,y:0,opacity:0})
            .to("#line30",0,{x:0,y:0,opacity:0})
            .to("#line31",0,{x:0,y:0,opacity:0})
            .to("#line32",0,{x:0,y:0,opacity:0})
            .to("#line33",0,{x:0,y:0,opacity:0})
            .to("#line34",0,{x:0,y:0,opacity:0})
            .to("#line35",0,{x:0,y:0,opacity:0})
            .to("#line36",0,{x:0,y:0,opacity:0})
            .to("#line37",0,{x:0,y:0,opacity:0})
            .to("#line38",0,{x:0,y:0,opacity:0})
            .to("#line39",0,{x:0,y:0,opacity:0})
            .to("#line40",0,{x:0,y:0,opacity:0})
            .to("#line41",0,{x:0,y:0,opacity:0})
            .to("#line42",0,{x:0,y:0,opacity:0})
            
    //Timeline for line segment 3
    tlLines3
         //Setting all lines to 0 opacity
            .set("#line43",{opacity:0})
            .set("#line44",{opacity:0})
            .set("#line45",{opacity:0})
            .set("#line46",{opacity:0})
            .set("#line47",{opacity:0})
            .set("#line48",{opacity:0})
            .set("#line49",{opacity:0})
            .set("#line50",{opacity:0})
            .set("#line51",{opacity:0})
            .set("#line52",{opacity:0})
            .set("#line53",{opacity:0})
            .set("#line55",{opacity:0})
            .set("#line56",{opacity:0})
            .set("#line57",{opacity:0})
            .set("#line58",{opacity:0})
            .set("#line59",{opacity:0})
            .set("#line60",{opacity:0})
            .set("#line61",{opacity:0})
            

            //First appearance in the original position
            .to("#line43",0.6,{opacity:1},0)
            .to("#line44",0.06,{opacity:1},0)
            .to("#line45",0.06,{opacity:1},0)
            .to("#line46",0.06,{opacity:1},0)
            .to("#line47",0.06,{opacity:1},0)
            .to("#line48",0.06,{opacity:1},0)
            .to("#line49",0.06,{opacity:1},0)
            .to("#line50",0.06,{opacity:1},0)
            .to("#line51",0.06,{opacity:1},0)
            .to("#line52",0.06,{opacity:1},0)
            .to("#line53",0.06,{opacity:1},0)
            .to("#line55",0.06,{opacity:1},0)
            .to("#line56",0.06,{opacity:1},0)
            .to("#line57",0.06,{opacity:1},0)
            .to("#line58",0.06,{opacity:1},0)
            .to("#line59",0.06,{opacity:1},0)
            .to("#line60",0.06,{opacity:1},0)
            .to("#line61",0.06,{opacity:1},0)

            //First dissapearance and displacement of the lines 
            .to("#line43",0,{opacity:0},'+=0.6')
            .to("#line44",0,{y:3,x:5,scaleX:2,opacity:0})
            .to("#line45",0,{x:5,scaleX:0.5,opacity:0})
            .to("#line46",0,{x:-5,y:-4,scaleX:0.5,opacity:0})
            .to("#line47",0,{x:5,y:-4,scaleX:1.3,opacity:0})
            .to("#line48",0,{x:7,y:4,scaleX:1.6,opacity:0})
            .to("#line49",0,{x:4,y:-4,scaleX:1.6,opacity:0})
            .to("#line50",0,{x:-2,y:1,scaleX:1.6,opacity:0})
            .to("#line51",0,{x:2,y:-1,scaleX:1.6,opacity:0})
            .to("#line52",0,{x:-5,y:3,scaleX:1.6,opacity:0})
            .to("#line53",0,{x:-5,y:-1,scaleX:1.6,opacity:0})
            .to("#line55",0,{x:-5,y:-1,scaleX:1.6,opacity:0})
            .to("#line56",0,{x:-13,y:-4,scaleX:1.6,opacity:0})
            .to("#line57",0,{x:-3,y:2,scaleX:1.6,opacity:0})
            .to("#line58",0,{x:-3,y:2,scaleX:1.6,opacity:0})
            .to("#line59",0,{x:0,y:-1,scaleX:1.6,opacity:0})
            .to("#line60",0,{x:5,y:2,scaleY:1.2,scaleX:1.2,opacity:0})
            .to("#line61",0,{x:5,y:2,scaleY:1.2,scaleX:1.2,opacity:0})

            //First appearance of the displaced lines 
            .to("#line43",0.24,{opacity:1})
            .to("#line44",0.24,{opacity:1},'-=0.24')
            .to("#line45",0.24,{opacity:1},'-=0.24')
            .to("#line46",0.24,{opacity:1},'-=0.24')
            .to("#line47",0.24,{opacity:1},'-=0.24')
            .to("#line48",0.24,{opacity:1},'-=0.24')
            .to("#line49",0.24,{opacity:1},'-=0.24')
            .to("#line50",0.24,{opacity:1},'-=0.24')
            .to("#line51",0.24,{opacity:1},'-=0.24')
            .to("#line52",0.24,{opacity:1},'-=0.24')
            .to("#line53",0.24,{opacity:1},'-=0.24')
            .to("#line55",0.24,{opacity:1},'-=0.24')
            .to("#line56",0.24,{opacity:1},'-=0.24')
            .to("#line57",0.24,{opacity:1},'-=0.24')
            .to("#line58",0.24,{opacity:1},'-=0.24')
            .to("#line59",0.24,{opacity:1},'-=0.24')
            .to("#line60",0.24,{opacity:1},'-=0.24')
            .to("#line61",0.24,{opacity:1},'-=0.24')

            //Second dissapearance and displacement of the lines
            .to("#line43",0,{y:3,opacity:0,scaleX:0.3},'+=0.6')
            .to("#line44",0,{y:3,opacity:0,scaleX:0.3})
            .to("#line45",0,{x:5,y:-6,opacity:0,scaleX:1.3})
            .to("#line46",0,{x:-2,y:-1,opacity:0,scaleX:0.3})
            .to("#line47",0,{x:3,y:1,opacity:0,scaleX:0.3})
            .to("#line48",0,{x:4,y:11,opacity:0,scaleX:1.3})
            .to("#line49",0,{x:2,y:-5,opacity:0,scaleX:0.7})
            .to("#line50",0,{x:0,y:3,opacity:0,scaleX:0.7})
            .to("#line51",0,{x:4,y:-3,opacity:0,scaleX:0.7})
            .to("#line52",0,{x:-4,y:3,opacity:0,scaleX:0.7})
            .to("#line53",0,{x:-3,y:3,opacity:0,scaleX:0.7})
            .to("#line55",0,{x:-3,y:-3,opacity:0,scaleX:0.7})
            .to("#line56",0,{x:-2,y:0,opacity:0,scaleX:0.7})
            .to("#line57",0,{x:-4,y:2,opacity:0,scaleX:0.7})
            .to("#line58",0,{x:-4,y:-2,opacity:0,scaleX:0.7})
            .to("#line59",0,{x:-4,y:2,opacity:0,scaleX:0.7})
            .to("#line60",0,{x:-4,y:3,opacity:0,scaleX:0.7})
            .to("#line61",0,{x:-3,y:3,opacity:0,scaleX:0.7})

            //Second appearance of the displaced lines
            .to("#line43",0.2,{opacity:1})
            .to("#line44",0.2,{opacity:1},'-=0.2')
            .to("#line45",0.2,{opacity:1},'-=0.2')
            .to("#line46",0.2,{opacity:1},'-=0.2')
            .to("#line47",0.2,{opacity:1},'-=0.2')
            .to("#line48",0.2,{opacity:1},'-=0.2')
            .to("#line49",0.2,{opacity:1},'-=0.2')
            .to("#line50",0.2,{opacity:1},'-=0.2')
            .to("#line51",0.2,{opacity:1},'-=0.2')
            .to("#line52",0.2,{opacity:1},'-=0.2')
            .to("#line53",0.2,{opacity:1},'-=0.2')
            .to("#line55",0.2,{opacity:1},'-=0.2')
            .to("#line56",0.2,{opacity:1},'-=0.2')
            .to("#line57",0.2,{opacity:1},'-=0.2')
            .to("#line58",0.2,{opacity:1},'-=0.2')
            .to("#line59",0.2,{opacity:1},'-=0.2')
            .to("#line60",0.2,{opacity:1},'-=0.2')
            .to("#line61",0.2,{opacity:1},'-=0.2')

            //Third dissapearance and displacement of the lines
            .to("#line43",0,{x:5,y:7,opacity:0,scaleX:1.1},'+=0.02')
            .to("#line44",0,{x:5,y:-2,opacity:0,scaleX:1.1})
            .to("#line45",0,{x:5,y:-7,opacity:0,scaleX:1.1})
            .to("#line46",0,{x:1,y:1,opacity:0,scaleX:1.1})
            .to("#line47",0,{x:1,y:-4,opacity:0,scaleX:1.1})
            .to("#line48",0,{x:1,y:-7,opacity:0,scaleX:1.1})
            .to("#line49",0,{x:2,y:-7,opacity:0,scaleX:1.1})
            .to("#line50",0,{x:-3,y:2,opacity:0,scaleX:1.1})
            .to("#line51",0,{x:3,y:-2,opacity:0,scaleX:1.1})
            .to("#line52",0,{x:-3,y:2,opacity:0,scaleX:1.1})
            .to("#line53",0,{x:-3,y:2,opacity:0,scaleX:1.1})
            .to("#line55",0,{x:-6,y:-1,opacity:0,scaleX:1.1})
            .to("#line56",0,{x:-2,y:0,opacity:0,scaleX:1.1})
            .to("#line57",0,{x:-3,y:0,opacity:0,scaleX:1.1})
            .to("#line58",0,{x:-3,y:0,opacity:0,scaleX:1.1})
            .to("#line59",0,{x:-3,y:0,opacity:0,scaleX:1.1})
            .to("#line60",0,{x:-4,y:4,opacity:0,scaleX:1.1})
            .to("#line61",0,{x:-4,y:4,opacity:0,scaleX:1.1})
            
            //Third appearance of the displaced lines
            .to("#line43",0.2,{opacity:1})
            .to("#line44",0.2,{opacity:1},'-=0.2')
            .to("#line45",0.2,{opacity:1},'-=0.2')
            .to("#line46",0.2,{opacity:1},'-=0.2')
            .to("#line47",0.2,{opacity:1},'-=0.2')
            .to("#line48",0.2,{opacity:1},'-=0.2')
            .to("#line49",0.2,{opacity:1},'-=0.2')
            .to("#line50",0.2,{opacity:1},'-=0.2')
            .to("#line51",0.2,{opacity:1},'-=0.2')
            .to("#line52",0.2,{opacity:1},'-=0.2')
            .to("#line53",0.2,{opacity:1},'-=0.2')
            .to("#line55",0.2,{opacity:1},'-=0.2')
            .to("#line56",0.2,{opacity:1},'-=0.2')
            .to("#line57",0.2,{opacity:1},'-=0.2')
            .to("#line58",0.2,{opacity:1},'-=0.2')
            .to("#line59",0.2,{opacity:1},'-=0.2')
            .to("#line60",0.2,{opacity:1},'-=0.2')
            .to("#line61",0.2,{opacity:1},'-=0.2')

            //Fourth dissapearance and displacement of the lines
            .to("#line43",0,{x:-2,y:4,opacity:0,scaleX:1.1},'+=0.02')
            .to("#line44",0,{x:-2,y:4,opacity:0,scaleX:1.1})
            .to("#line45",0,{x:-2,y:-10,opacity:0,scaleX:1.1},0)
            .to("#line46",0,{x:-2,y:-7,opacity:0,scaleX:1.1},0)
            .to("#line47",0,{x:2,y:-5,opacity:0,scaleX:1.1},0)
            .to("#line48",0,{x:4,y:-5,opacity:0,scaleX:1.1},0)
            .to("#line49",0,{x:4,y:-3,opacity:0,scaleX:1.1},0)
            .to("#line50",0,{x:-4,y:-1,opacity:0,scaleX:1.1},0)
            .to("#line51",0,{x:4,y:-1,opacity:0,scaleX:1.1},0)
            .to("#line52",0,{x:-1,y:-4,opacity:0,scaleX:1.1},0)
            .to("#line53",0,{x:-2,y:4,opacity:0,scaleX:1.1},0)
            .to("#line55",0,{x:-2,y:2,opacity:0,scaleX:1.1},0)
            .to("#line56",0,{x:-10,y:-2,opacity:0,scaleX:1.1},0)
            .to("#line57",0,{x:-4,y:-4,opacity:0,scaleX:1.1},0)
            .to("#line58",0,{x:-14,y:2,opacity:0,scaleX:1.1},0)
            .to("#line59",0,{x:-1,y:2,opacity:0,scaleX:1.1},0)
            .to("#line60",0,{x:4,y:-3,opacity:0,scaleX:1.1},0)
            .to("#line61",0,{x:4,y:-3,opacity:0,scaleX:1.1},0)

            //Fourth  appearance of the displaced lines
            .to("#line43",0.2,{opacity:1})
            .to("#line44",0.2,{opacity:1},'-=0.2')
            .to("#line45",0.2,{opacity:1},'-=0.2')
            .to("#line46",0.2,{opacity:1},'-=0.2')
            .to("#line47",0.2,{opacity:1},'-=0.2')
            .to("#line48",0.2,{opacity:1},'-=0.2')
            .to("#line49",0.2,{opacity:1},'-=0.2')
            .to("#line50",0.2,{opacity:1},'-=0.2')
            .to("#line51",0.2,{opacity:1},'-=0.2')
            .to("#line52",0.2,{opacity:1},'-=0.2')
            .to("#line53",0.2,{opacity:1},'-=0.2')
            .to("#line55",0.2,{opacity:1},'-=0.2')
            .to("#line56",0.2,{opacity:1},'-=0.2')
            .to("#line57",0.2,{opacity:1},'-=0.2')
            .to("#line58",0.2,{opacity:1},'-=0.2')
            .to("#line59",0.2,{opacity:1},'-=0.2')
            .to("#line60",0.2,{opacity:1},'-=0.2')
            .to("#line61",0.2,{opacity:1},'-=0.2')

            //Final dissapearance and moving all lines to original position
            .to("#line43",0,{x:0,y:0,opacity:0},'+=0.02')
            .to("#line44",0,{x:0,y:0,opacity:0})
            .to("#line45",0,{x:0,y:0,opacity:0})
            .to("#line46",0,{x:0,y:0,opacity:0})
            .to("#line47",0,{x:0,y:0,opacity:0})
            .to("#line48",0,{x:0,y:0,opacity:0})
            .to("#line49",0,{x:0,y:0,opacity:0})
            .to("#line50",0,{x:0,y:0,opacity:0})
            .to("#line51",0,{x:0,y:0,opacity:0})
            .to("#line52",0,{x:0,y:0,opacity:0})
            .to("#line53",0,{x:0,y:0,opacity:0})
            .to("#line55",0,{x:0,y:0,opacity:0})
            .to("#line56",0,{x:0,y:0,opacity:0})
            .to("#line57",0,{x:0,y:0,opacity:0})
            .to("#line58",0,{x:0,y:0,opacity:0})
            .to("#line59",0,{x:0,y:0,opacity:0})
            .to("#line60",0,{x:0,y:0,opacity:0})
            .to("#line61",0,{x:0,y:0,opacity:0})
            
    tlLines.add(tlLines1).add(tlLines2,0).add(tlLines3,0)
    
    return tl2077.add(_2077).add(tlParticlesX,0).add(tlParticlesY,0).add(tlLines,0.6);
}




const scrollDown = document.querySelector('.scroll__down--text')
const squareRight = document.querySelector('.square--right');
const squareLeft = document.querySelector('.square--left');


function squareAnimation() {
    var square = gsap.timeline();
        
    square.to(squareRight, .5,{
        opacity:1,
        ease: "linear.easeNone",  
        repeat:2,
        delay: 9.5,//1.5
        
    },"pisc")

    square.to(squareRight, .5,{
        delay: .5,
        ease: "linear.easeNone",
        x: 80
    },"half")


    square.to(squareLeft, .5,{
        opacity:1,
        ease: "linear.easeNone",  
        repeat:2,
        delay: 9.5, //1.5

    },"pisc")

    square.to(squareLeft, .5,{
        delay: .5,
        ease: "linear.easeNone",
        x: -80
    },"half")

    square.to(scrollDown, .5,{
        delay: .8,
        ease: "linear.easeNone",
        opacity:1,
    },"half")



    square.to(squareLeft, 1.3,{
        delay: 1,
        yoyo: true,
        repeat: -1,
        opacity:0.8,
        ease: "ease",
        
    }, "breath")
    square.to(squareRight, 1.3,{
        delay: 1,
        yoyo: true,
        repeat: -1,
        opacity:0.8,
        ease: "ease",
        
    }, "breath")


}


masterTimeline
    .add(preLoad())
    .add(cyberpunk(),'-=1')
    .add(n2077(),'+=0.2')
    .add(squareAnimation(),'+=2')


