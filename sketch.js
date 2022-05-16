const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg = "sprites/snowBG.jpg";


function preload(){
    backgroundImg = loadImage(bg);
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;



    snow1 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow2 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow3 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow4 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow5 = new Snow(random(0,1200),random(-2000,20),10,10);

    snow6 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow7 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow8 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow9 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow10 = new Snow(random(0,1200),random(-2000,20),10,10);


    snow11 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow12 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow13 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow14 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow15 = new Snow(random(0,1200),random(-2000,20),10,10);

    snow16 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow17 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow18 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow19 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow20 = new Snow(random(0,1200),random(-2000,20),10,10);


    snow21 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow22 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow23 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow24 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow25 = new Snow(random(0,1200),random(-2000,20),10,10);

    snow26 = new Snow(random(0,1200),random(-200,20),10,10);
    snow27 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow28 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow29 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow30 = new Snow(random(0,1200),random(-2000,20),10,10);


    snow31 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow32 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow33 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow34 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow35 = new Snow(random(0,1200),random(-2000,20),10,10);

    snow36 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow37 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow38 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow39 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow40 = new Snow(random(0,1200),random(-2000,20),10,10);


    snow41 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow42 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow43 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow44 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow45 = new Snow(random(0,1200),random(-2000,20),10,10);

    snow46 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow47 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow48 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow49 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow50 = new Snow(random(0,1200),random(-2000,20),10,10);


    snow51 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow52 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow53 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow54 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow55 = new Snow(random(0,1200),random(-2000,20),10,10);

    snow56 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow57 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow58 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow59 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow60 = new Snow(random(0,1200),random(-2000,20),10,10);


    snow61 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow62 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow63 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow64 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow65 = new Snow(random(0,1200),random(-2000,20),10,10);

    snow66 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow67 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow68 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow69 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow70 = new Snow(random(0,1200),random(-2000,20),10,10);


    snow71 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow72 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow73 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow74 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow75 = new Snow(random(0,1200),random(-2000,20),10,10);

    snow76 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow77 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow78 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow79 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow80 = new Snow(random(0,1200),random(-2000,20),10,10);


    snow81 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow82 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow83 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow84 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow85 = new Snow(random(0,1200),random(-2000,20),10,10);

    snow86 = new Snow(random(0,1200),random(-200,20),10,10);
    snow87 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow88 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow89 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow90 = new Snow(random(0,1200),random(-2000,20),10,10);


    snow91 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow92 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow93 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow94 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow95 = new Snow(random(0,1200),random(-2000,20),10,10);

    snow96 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow97 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow98 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow99 = new Snow(random(0,1200),random(-2000,20),10,10);
    snow100 = new Snow(random(0,1200),random(-2000,20),10,10);
}



function draw(){
    background(backgroundImg);
    
    Engine.update(engine);



    if(frameCount%100===0){
        console.log("1");
        snow1 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow2 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow3 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow4 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow5 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow51 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow52 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow53 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow54 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow55 = new Snow(random(0,1200),random(-2000,20),10,10);
    }

    if(frameCount%150===0){
        console.log("2");
        snow6 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow7 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow8 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow9 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow10 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow56 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow57 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow58 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow59 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow60 = new Snow(random(0,1200),random(-2000,20),10,10);
    }

    if(frameCount%210===0){
        console.log("3");
        snow11 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow12 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow13 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow14 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow15 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow61 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow62 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow63 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow64 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow65 = new Snow(random(0,1200),random(-2000,20),10,10);
    }

    if(frameCount%255===0){
        console.log("4");
        snow16 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow17 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow18 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow19 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow20 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow66 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow67 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow68 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow69 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow70 = new Snow(random(0,1200),random(-2000,20),10,10);
    }

    if(frameCount%309===0){
        console.log("5");
        snow21 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow22 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow23 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow24 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow25 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow71 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow72 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow73 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow74 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow75 = new Snow(random(0,1200),random(-2000,20),10,10);
    }

    if(frameCount%350===0){
        console.log("6");
        snow26 = new Snow(random(0,1200),random(-200,20),10,10);
        snow27 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow28 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow29 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow30 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow76 = new Snow(random(0,1200),random(-200,20),10,10);
        snow77 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow78 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow79 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow80 = new Snow(random(0,1200),random(-2000,20),10,10);
    }

    if(frameCount%400===0){
        console.log("7");
        snow31 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow32 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow33 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow34 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow35 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow81 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow82 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow83 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow84 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow85 = new Snow(random(0,1200),random(-2000,20),10,10);
    }

    if(frameCount%450===0){
        console.log("8");
        snow36 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow37 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow38 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow39 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow40 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow86 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow87 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow88 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow89 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow90 = new Snow(random(0,1200),random(-2000,20),10,10);
    }

    if(frameCount%500===0){
        console.log("9");
        snow41 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow42 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow43 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow44 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow45 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow91 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow92 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow93 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow94 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow95 = new Snow(random(0,1200),random(-2000,20),10,10);
    }

    if(frameCount%537===0){
        console.log("10");
        snow46 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow47 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow48 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow49 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow50 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow96 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow97 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow98 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow99 = new Snow(random(0,1200),random(-2000,20),10,10);
        snow100 = new Snow(random(0,1200),random(-2000,20),10,10);
    }





    snow1.display();
    snow2.display();
    snow3.display();
    snow4.display();
    snow5.display();

    snow6.display();
    snow7.display();
    snow8.display();
    snow9.display();
    snow10.display();


    snow11.display();
    snow12.display();
    snow13.display();
    snow14.display();
    snow15.display();

    snow16.display();
    snow17.display();
    snow18.display();
    snow19.display();
    snow20.display();


    snow21.display();
    snow22.display();
    snow23.display();
    snow24.display();
    snow25.display();

    snow26.display();
    snow27.display();
    snow28.display();
    snow29.display();
    snow30.display();


    snow31.display();
    snow32.display();
    snow33.display();
    snow33.display();
    snow34.display();
    snow35.display();

    snow36.display();
    snow37.display();
    snow38.display();
    snow39.display();
    snow40.display();


    snow41.display();
    snow42.display();
    snow43.display();
    snow44.display();
    snow45.display();

    snow46.display();
    snow47.display();
    snow48.display();
    snow49.display();
    snow50.display();    


    snow51.display();
    snow52.display();
    snow53.display();
    snow54.display();
    snow55.display();

    snow56.display();
    snow57.display();
    snow58.display();
    snow59.display();
    snow60.display();
    
    
    snow61.display();
    snow62.display();
    snow63.display();
    snow64.display();
    snow65.display();

    snow66.display();
    snow67.display();
    snow68.display();
    snow69.display();
    snow70.display();
    

    snow71.display();
    snow72.display();
    snow73.display();
    snow74.display();
    snow75.display();

    snow76.display();
    snow77.display();
    snow78.display();
    snow79.display();
    snow80.display();


    snow81.display();
    snow82.display();
    snow83.display();
    snow84.display();
    snow85.display();

    snow86.display();
    snow87.display();
    snow88.display();
    snow89.display();
    snow90.display();


    snow91.display();
    snow92.display();
    snow93.display();
    snow94.display();
    snow95.display();

    snow96.display();
    snow97.display();
    snow98.display();
    snow99.display();
    snow100.display();


}