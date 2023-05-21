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

export type CreateAppointmentParams = {
    patientName : string;
    patientId : number;
    unimedId:string;
    appointedTime:string;
};

export type updatePatientParams = {
    patientName : string;
    patientId : number;
    unimedId:string;
    appointedTime:string;
};

export type CreateStaffParams = {
    firstName : string;
    lastName: string;
    staffId:number;
    position:string;
    address:string;
    email:string;
    phoneNumber:number;
};

export type updateStaffParams = {
    firstName : string;
    lastName: string;
    staffId:number;
    position:string;
    address:string;
    email:string;
    phoneNumber:number;
};

