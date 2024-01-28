export class WishList{

    public wishListId : string;
    public  item : string;
    public link : string;

    constructor(wishListId : string, item: string, link: string ){
        this.wishListId = wishListId;
        this.item = item;
        this.link = link;

    }
}
