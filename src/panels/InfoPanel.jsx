import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faYoutube,
    faDiscord,
} from '@fortawesome/free-brands-svg-icons';

const InfoPanel = ({ onClose }) => {
    return (
        <div className='panel draggable' id='info-panel'>
            <div className='tab'>
                <p className='header' id='info-header'>
                    info //&#32;
                    <span className='close' onClick={onClose}>
                        x
                    </span>
                </p>
            </div>
            <div className='info-content'>
                <p className='info-text'>Black Hole Simulation vA0.1</p>
                <p className='p-text'>Created by Agyo (Jason Lord)</p>
                <table className='socials'>
                    <tbody>
                        <tr>
                            <td>
                                <div className='github-icon'>
                                    <a
                                        href='https://github.com/agyo1'
                                        className='no-style'
                                        target='_blank'
                                    >
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            className='social-icon'
                                        ></FontAwesomeIcon>
                                        <p className='social-text'>github</p>
                                    </a>
                                </div>
                            </td>
                            <td>
                                <div className='youtube-icon'>
                                    <FontAwesomeIcon
                                        icon={faYoutube}
                                        className='social-icon'
                                    ></FontAwesomeIcon>
                                    <p className='social-text'>youtube</p>
                                </div>
                            </td>
                            <td>
                                <div className='discord-icon'>
                                    <FontAwesomeIcon
                                        icon={faDiscord}
                                        className='social-icon'
                                    ></FontAwesomeIcon>
                                    <p className='social-text'>discord</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className='info-controls'>controls &#62;&#62;</p>
                <p className='info-controls-text'>
                    <u>w</u> : move camera forward <br />
                    <u>a</u> : pan camera left
                    <br />
                    <u>s</u> : move camera backward <br />
                    <u>d</u> : pan camera right
                </p>
                <p className='watermark-text'>©Jason Lord 2024</p>
            </div>
        </div>
    );
};

export default InfoPanel;
