export class WishList{

    public wishListId : number;
    public  item : string;
    public link : string;

    constructor(wishListId : number, item: string, link: string ){
        this.wishListId = wishListId;
        this.item = item;
        this.link = link;

    }
}