// Libraries
import React, { Component } from 'react';
import { observer } from 'mobx-react';

interface State { }

@observer
export class Preview extends Component<any, State> {

    constructor(p: any) {
        super(p)
        this.state = {}
    }

    render() {
        let eventPost = false;

        return (
            <div className="preview">
                <p>---</p>
                <p id="author">title: "title" </p>
                <p id="author">author: "author</p>
                {eventPost ? // is event post radio button selected? If yes:
                    <div>
                        <p id="type">layout: event_post </p>
                        <p id="start_date">start_date: "start date" </p>
                        <p id="end_date">end_date: "end date"</p>
                    </div>
                    : // if not; then it must be a blog post
                    <div>
                        <p id="type">layout: blog_post </p>
                        <p id="date">date: "date"</p>
                        <p id="tags">tags: "tags" </p>
                        <p id="category">category: "category" </p>
                    </div>
                }
                <p>---</p>
            </div>

            // {/* <div className="preview">
            //     <p>---</p>
            //     {isDisabled ? <p id="type">layout: blog_post </p> : <p id="type">layout: event_post </p>}
            //     <p id="author">title: "{this.state.title}" </p>
            //     <p id="author">author: "{this.state.author}"</p>
            //     {isDisabled ? <p id="date">date: {now.toISOString().split('.')[0] + "Z"} </p> : null}
            //     {isDisabled ? null : (
            //     <div>
            //         <p id="start_date">start_date: {this.state.eventStartDate} </p>
            //         <p id="end_date">end_date: {this.state.eventEndDate}</p>
            //     </div>
            //     )}
            //     {isDisabled ? (
            //     <div>
            //         <p id="tags">tags: "{this.state.tags}" </p>
            //         <p id="category">category: "{this.state.category}" </p>
            //     </div>
            //     ) : null}

            //     <p>---</p>
            // </div>
            // <div>
            //     <Button color="primary">Копирај</Button>{' '}
            // </div> */}
        );

    }
}