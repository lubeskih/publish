// Libraries
import { observable } from 'mobx';

// Types
type PageLayout = 'blog_post' | 'event_post';
type rButton = 'blogPost' | 'eventPost' | null;

// Store
export class Store {
    // Radio button; blogPost -> blog post; eventPost -> event post
    @observable check: rButton = null;

    // General
    @observable title: string = '';
    @observable author: string = '';
    @observable typeOfPageLayout: PageLayout = 'blog_post';

    // For blog posts
    @observable date: string = '';
    @observable tags: string = '';
    @observable category: string = '';

    // For events
    @observable eventStartDate: string = '';
    @observable eventEndDate: string = '';

    // For Alert after copy
    @observable visible: boolean = false;
}