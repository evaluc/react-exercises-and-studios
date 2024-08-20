import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {

let authorLink = "https://www.joshuaweissman.com/post/homemade-gyros";
let authorPhoto = "https://images.credly.com/images/6c06e4ba-d4fc-4cef-ae12-443a11b550cc/blob.jpeg";
let authorName = "Joshua Weissman";

return (
    <div className = {styles.recipeAuthorBlock}>
       <img src={authorPhoto} alt = "Joshua Weissman with arms crossed." className={styles.imageUpdates} />
       <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>YouTube Chef Recipes</a> 
       </div>
    </div>
 );

}

class RecipeDescription extends React.Component {
    render() {
    return(
    <div> 
        <div>
            <h1>Two Dollar Gyro But Cheaper</h1>
            <p>We're taking this serious.. homemade pita, homemade gyro meat on a real gyro spindle roaster, and of course the greatest tzatziki to live.
            You can do it all and we're going to make that possible for you. </p>
        </div>
   <RecipeAuthor />
    </div>
    );
    }
}


export default RecipeDescription;