export class Model {
    user;
    items;

    constructor() {
        this.user = "Çınar";
        this.items = [
            new TodoItem("Spor",true),
            new TodoItem("Kitap Okumak",false),
            new TodoItem("Kahvaltı",true),
            new TodoItem("Yürüyüş",false),
        ]
    }
}


export class TodoItem{
    description;
    action;

    constructor(description: string,action: boolean){
        this.description = description;
        this.action = action;
    }
}