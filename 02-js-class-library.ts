class Library{
    name:string;
    location:string;
    books:{title:string,author:string,year:number}[];
    constructor( name:string, location:string, books:{title:string,author:string,year:number}[]){
        this.name=name;
        this.books=books;
        this.location=location
    }
    addBook(Books:{title:string,author:string,year:number}){
        this.books.push(Books)
    }
//tìm sách theo tiêu đề
    FindBook(title:string){
        for(const book of this.books) {
            if (book.title.toLowerCase()===title.toLowerCase()){
                return book;
            }
            return undefined
        }
    }
}