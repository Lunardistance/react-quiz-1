import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';


function Icon({fileordir}) {
    if(fileordir.indexOf(".") !== -1){
        return (
            <td className = "icon-cell">
            <i className = "fa fa-file-text-o" />
            </td>
        )
    }else{
        return (
            <td className = "icon-cell">
            <i className = "fa fa-folder-open-o" />
            </td>  
        )
    }

}


function FileName({ fileordir }) {
    return (
        <td className = "file-name">
        <a href={fileordir}>{fileordir}</a>
        </td>
    )
}


function CommitMessage ({ message }) {
    if(message.length > 35) {
        
        var length = 35;
        var cutMessage = message.substring(0, length);
    return(
       <td className = "commit-message">
        {cutMessage}...
        </td>
    )
    
    }else{
    return (
        <td className = "commit-message">
        {message}
        </td>
    )
    }
}

const TimeSince = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <td className = "time-since">
        {timeString}
        </td>
    );
}



var filesArray = [
        {
            filename: "folder-1",
            commitmessage: "This is a nice commit",
            timestamp: "2018-01-25 21:24:37"
        },
        {
            filename: "folder-2",
            commitmessage: "Longer strings cut after 35 characters",
            timestamp: "2017-01-25 21:24:37"
        },
        {
            filename: "firstfile.js",
            commitmessage: "I love where this commit is going",
            timestamp: "2018-10-25 21:24:37"
        },
        {
            filename: "filetwo.html",
            commitmessage: "I can commit to this.",
            timestamp: "2019-02-25 21:24:37"
        },
        {
            filename: "file3.jpg",
            commitmessage: "Committee Commit Meeting",
            timestamp: "2019-02-27 12:24:37"
        }
];

class FileRow extends Component {
    render(){
        const {filename, commitmessage, time} = this.props.row;
        return (
        <table className ="mainTable">

            {this.props.row.map(row=>(
                    <tr className = "rows">
                    <Icon fileordir={row.filename}/>
                    <FileName fileordir={row.filename}/>
                    <CommitMessage message={row.commitmessage}/>
                    <TimeSince time={row.timestamp}/>
                </tr>
            ))}

            </table>

        )
    }
}





ReactDOM.render(<FileRow row={filesArray}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
