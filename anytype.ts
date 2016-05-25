/**
 * area
 */
class area {
    constructor(public width:any , public height:any) {
        
    }
    getarea(){
        return this.width * this.height;
    }
}
let rectanglearea = new area(4,5);
rectanglearea.getarea();