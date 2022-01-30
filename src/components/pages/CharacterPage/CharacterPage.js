import React from 'react';

import styles from "./CharacterPage.module.scss"

const CharacterPage = ({name,birth,nickname, image, status, occupations}) => {
    return (
        <div>
            <div>
                {name}
            </div>

            <div>
                {birth}
            </div>

            <div>
                {nickname}
            </div>

            <div>
                {image}
            </div>

            <div>
                {status}
            </div>

            <div>
                {
                    occupations.map(occupation=>(
                        <div>
                            {occupation}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CharacterPage;
