import React from 'react';
import './css/InfoMenu.css';

const InfoMenu = (props) => {
    return(
        <div classname="InfoMenu_Content_Container">
            <h2 id="InfoGreet">Welcome to Stock Watcher!</h2>
                <p className="InfoP" id="IntroInfo">
                    Welcome to the Stock Watcher. Here you will be able to 'follow' any Stock
                    or crypto currency that has been added to our system. We will always be adding more,
                    but we are limited to what is listed by Yahoo! Finance
                </p>
                <p className="InfoP" id="YourListInfo">
                    <strong>Your List - </strong>Here you can see your selected stocks or cryptos and set  
                    <strong> Notice Points</strong>. If your selected stock or crypto's evaluation 
                    is equal to or less than your set Notice Point, you will recieve a notification 
                    (the default option is email, you can change this in Settings).
                </p>
                <p className="InfoP" id="SearchInfo">
                    <strong>Search - </strong>This is where you can search all sorts of the added stocks or cryptos and select
                    and search for stocks or cryptos to add to your list. You can also set any <strong>
                    Notice Points </strong>here as well.
                </p>
                <p className="InfoP" id="SettingsInfo">
                    <strong>Settings - </strong> Here, you can change settings like your
                    username, password, email, phone number, and more
                </p>
        </div>
    )
}

export default InfoMenu