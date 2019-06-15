class Files{
    constructor(files,opts){
        this.files = files;
        this.type = opts.type;
        this.size = opts.size;
    }
    checkType(){
        let regType =this.files.type.match( /\/(\w+)$/i);
        if(regType){
            return this.type.includes(regType[1]);
        }
    }
    checkSize(){
        return (this.size * 1024 * 1024) > this.files.size;
    }
}
export default Files;