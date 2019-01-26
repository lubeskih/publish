import { observable } from 'mobx';


type PageLayout = 'blog_post' | 'event_post';
type rButton = 'blogPost' | 'eventPost' | null;

export class Store {
    // Radio button; blogPost -> blog post; eventPost -> event post
    @observable check: rButton = null;

    // General
    @observable title: string = '';
    @observable author: string = '';
    @observable typeOfPageLayout: PageLayout = 'blog_post';

    // For blog posts
    @observable date: string = ''; // !!! Date is stored in UTC !!! TO BE CHANGED TO CEST !!!
    @observable tags: string = '';
    @observable category: string = '';

    // For events
    @observable eventStartDate: string = ''; // !!! Date is stored in UTC !!! TO BE CHANGED TO CEST !!!
    @observable eventEndDate: string = ''; // !!! Date is stored in UTC !!! TO BE CHANGED TO CEST !!!

    // For Alert after copy
    @observable visible: boolean = false;
}