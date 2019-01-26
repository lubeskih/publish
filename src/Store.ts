import { observable, action } from 'mobx';


type PageLayout = 'blog_post' | 'event_post';

export class Store {
    // General
    @observable title: string = '';
    @observable author: string = '';
    @observable typeOfPageLayout: PageLayout = 'blog_post';

    // For blog posts
    @observable date: string = '';

    // For events
    @observable eventStartDate: string = '';
    @observable eventEndDate: string = '';
    @observable test: string = "tino";
}