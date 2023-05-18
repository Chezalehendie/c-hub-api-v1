import { type } from "os";

export type CreateArticleParams = {
    articleName : string;
    author : string;
};

export type updateArticleParams = {
    articleName : string;
    author : string;
};

export type CreateClubParams = {
    clubName : string;
    clubDetails:string;
}

export type updateClubParams = {
    clubName : string;
    clubDetails:string;
};

export type CreateItemParams = {
    itemName : string;
    
};

export type updateItemsParams = {
    itemName : string;
};
