// Libraries
import React, { Component } from "react";
import { Button } from "reactstrap";
import ClipboardJS from "clipboard";

// Store
import { Store } from "../Store";

interface IProps {
  store: Store;
}

export class CopyPreview extends Component<IProps, {}> {
  toClipboard: string = "";
  success: boolean = false;

  constructor(props: IProps) {
    super(props);
  }

  copyToClipboard = () => {
    // I need to find a better way of doing this I guess
    this.toClipboard = `---\ntitle: "${this.props.store.title}"\nauthor: "${
      this.props.store.author
    }"\n`;

    if (this.props.store.check === "blogPost") {
      this.toClipboard += `layout: "${
        this.props.store.typeOfPageLayout
      }"\ndate: "${this.props.store.date}"\ntags: "${
        this.props.store.tags
      }"\ncategory: "${this.props.store.category}"\n---\n`;
    } else if (this.props.store.check === "eventPost") {
      this.toClipboard += `layout: "${
        this.props.store.typeOfPageLayout
      }"\nstart_date: "${this.props.store.eventStartDate}"\nend_date: "${
        this.props.store.eventEndDate
      }"\n---\n`;
    } else {
      this.toClipboard = `---\ntitle: "${this.props.store.title}"\nauthor: "${
        this.props.store.author
      }"\n---\n`;
    }

    return this.toClipboard;
  };
  
  componentDidMount() {
    let cb = new ClipboardJS(".btn", {
      text: this.copyToClipboard
    });

    cb.on("success", () => {
      this.props.store.visible = true;

      setTimeout(() => {
        this.props.store.visible = false;
      }, 3000);
    });
  }

  render() {
    return (
      <div>
        <Button className="btn" color="primary">
          Копирај
        </Button>
      </div>
    );
  }
}
