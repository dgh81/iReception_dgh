import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from "@mui/icons-material/Work";
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import AutoComplete from "./Autocomplete";

export const ProfileData = (res) => {

    console.log("running profiledata. res = " + res);
    return (
        <div className='container'>
            <AutoComplete response={res} />
        </div>
    );
};


// <List className="profileData">
//     {usersPromise.map((user) => (
//         <h3>{user.displayName}</h3>
//     ))}

//     {/* <h3>{usersPromise[0].displayName}</h3> */}
//     {/* 
//     <NameListItem name={usersPromise[0].displayName + ", " + usersPromise.givenName} />
//     <MailListItem mail={usersPromise[0].mail} /> */}

//     {/* <JobTitleListItem jobTitle={usersPromise.jobTitle} />
//     <PhoneListItem phone={usersPromise.businessPhones[0]} />
//     <LocationListItem location={usersPromise.officeLocation} /> */}
// </List>


// const NameListItem = ({ name }) => (
//     <ListItem>
//         <ListItemAvatar>
//             <Avatar>
//                 <PersonIcon />
//             </Avatar>
//         </ListItemAvatar>
//         <ListItemText primary="Name" secondary={name} />
//     </ListItem>
// );

// const JobTitleListItem = ({ jobTitle }) => (
//     <ListItem>
//         <ListItemAvatar>
//             <Avatar>
//                 <WorkIcon />
//             </Avatar>
//         </ListItemAvatar>
//         <ListItemText primary="Title" secondary={jobTitle} />
//     </ListItem>
// );

const MailListItem = ({ mail }) => (
    <ListItem>
        <ListItemAvatar>
            <Avatar>
                <MailIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mail" secondary={mail} />
    </ListItem>
);

// const PhoneListItem = ({ phone }) => (
//     <ListItem>
//         <ListItemAvatar>
//             <Avatar>
//                 <PhoneIcon />
//             </Avatar>
//         </ListItemAvatar>
//         <ListItemText primary="Phone" secondary={phone} />
//     </ListItem>
// );

// const LocationListItem = ({ location }) => (
//     <ListItem>
//         <ListItemAvatar>
//             <Avatar>
//                 <LocationOnIcon />
//             </Avatar>
//         </ListItemAvatar>
//         <ListItemText primary="Location" secondary={location} />
//     </ListItem>
// );
