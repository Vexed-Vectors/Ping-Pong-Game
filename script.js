var DIRECTION = {
    IDLE:0,
    RIGHT:4,
    UP:1,
    DOWN:2,
    LEFT:3

};
var rounds = [5,5,3,3,2];
var colors = ['#F28F3B', '#C74C3C' , '#FFD5C2' , '#ffffff' , '#588B8B' ];

var Ball = {
    new: function (incrementedSpeed){
        return {
            width:18, 
            height:18,
            x:(this.canvas.width/2) - 9,
            y: (this.canvas.width/2) - 9,
            moveX: DIRECTION.IDLE,
            moveY: DIRECTION.IDLE,
            speed: incrementedSpeed || 7

        };
    }

};

var Comp = {
    new: function (side){
        return{
            width:18,
            height:180,
            x:side ==='left'? 150: this.canvas.width - 150,
            y: (this.canvas.height/2) - 35,
            score:0,
            move:DIRECTION.IDLE,
            speed:8

        };
    }
};

var Game = {
    initializer: function(){
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');

        this.canvas.width = 1400;
        this.canvas.height = 1000;
        this.canvas.style.width = (this.canvas.width/2)+'px';
        this.canvas.style.height = (this.canvas.height/2)+'px';
    }
}