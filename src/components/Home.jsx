import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import img from '../assets/image.png'
import img2 from '../assets/image2.png'
import axios from 'axios'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


function Home() {


    const [productDatas, setProductData] = useState([])
    const [hideFilter, setHideFilter] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null);
    const [heartStates, setHeartStates] = useState(Array(productDatas.length).fill(false));
    const [isFilterOpen, setIsFilterOpen] = useState(false);



    let option = [
        'RECOMMENDED',
        'NEWEST FIRST',
        'POPULAR',
        'PRICE: HIGH TO LOW',
        'PRICE: LOW TO HIGH'
    ]
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleDropdownFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };


    const handleHeartClick = (index) => {
        const updatedHeartStates = [...heartStates];
        updatedHeartStates[index] = !updatedHeartStates[index];
        setHeartStates(updatedHeartStates);
    };




    const handleOptionClick = (options) => {
        setSelectedOption(options);
        // onSelect(option);
        setIsOpen(false);
    };

    const hideFilterFun = async (e) => {
        e.preventDefault()
        setHideFilter(!hideFilter)
    }
    const toggleFilterDropdown = async (e) => {

        setIsOpen(!isOpen)
    }


    async function fetchData() {
        let response = await axios.get(`https://fakestoreapi.com/products`)

        setProductData(response.data)

    }
    useEffect(() => {
        fetchData()
    }, [])
    useEffect(() => {
        console.log(productDatas, 'dwsdasdasdada');
    }, [productDatas])

    return (
        <div className={styles.body}>
            <div class={styles.topNav}>
                <div class={styles.topNavLorum}><img class={styles.topNavImg} src={img} alt="" /><span class={styles.topNavPara} >Lorum Ipsum dolor</span></div>
                <div class={styles.topNavLorum}><img class={styles.topNavImg} src={img} alt="" /><span class={styles.topNavPara} >Lorum Ipsum dolor</span></div>
                <div class={styles.topNavLorum}><img class={styles.topNavImg} src={img} alt="" /><span class={styles.topNavPara} >Lorum Ipsum dolor</span></div>

            </div>
            <div class={styles.navbar}>
                <div className={styles.subNavTop}>
                    <div className={styles.subNavTopIcons}><img src={img2} alt="" /></div>
                    <div className={styles.subNavTopIcons}>
                        <h1>LOGO</h1>
                    </div>
                    <div className={styles.subNavTopIcons} >
                        <FaRegHeart />
                        <RiSearchLine />
                        <BsHandbag />
                        <CiUser />
                    </div>
                </div>
                <div className={styles.subNav}>
                    <h2>SHOP</h2>
                    <h2>SKILLS</h2>
                    <h2>STORIES</h2>
                    <h2>ABOUT</h2>
                    <h2>CONTACT US</h2>
                </div>
            </div>
            <hr />
            <div className={styles.description}>
                <div className={styles.descriptionBelow}>
                    <h1>DISCOVER OUR PRODUCTS</h1>
                    <div className={styles.descriptionBelowdiv}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
                            Dolor integer scelerisque nibh amet mi ut elementum dolor.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.productssortnav}>
                <div className={styles.filterItem}>
                    <h2>3425 ITEMS</h2>
                    <div className={styles.showFilter}>
                        {
                            hideFilter ? <a id={styles.heading1} onClick={(e) => hideFilterFun(e)} href="">SHOW FILTER</a> : <a id={styles.heading1} onClick={hideFilterFun} href="">HIDE FILTER</a>
                        }
                    </div>
                </div>
                <div className={styles.dropdowncontainer}>
                    {selectedOption && <div className={styles.selectedoption}>{selectedOption}</div>}
                    {isOpen && (
                        <ul className={styles.dropdownmenu}>
                            {option.map((option) => (
                                <li key={option} onClick={() => handleOptionClick(option)}>
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className={styles.dropdownarrow} onClick={toggleDropdown}></div>
                </div>
            </div>
            <hr />
            <div className={styles.products}>
                {!hideFilter && <div className={styles.filter}>
                    <div class={styles.custome}>
                        <input type="checkbox" />
                        <h2>CUSTOMIZABLE</h2>
                    </div>
                    <hr />
                    <div className={styles.filterItems}>
                        <div >
                            <h2>IDEAL FOR</h2>
                            <h3>All</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '0', display: isFilterOpen ? 'flex' : 'none' }}>
                                <div className={styles.prod}><input type="checkbox" /><p>Men</p></div>
                                <div className={styles.prod}><input type="checkbox" /><p>Women</p></div>
                                <div className={styles.prod}><input type="checkbox" /><p>Baby & Kids</p></div>
                            </div>
                        </div>
                        <div style={{ position: 'static' }}>
                            <MdOutlineKeyboardArrowDown onClick={toggleDropdownFilter} />
                        </div>
                    </div>
                    <hr />
                    <div className={styles.filterItems}>
                        <div>

                            <h2>OCCASION</h2>
                            <h3>All</h3>
                        </div>
                        <div>
                            <MdOutlineKeyboardArrowDown />
                        </div>

                    </div>
                    <hr />
                    <div className={styles.filterItems}>
                        <div>
                            <h2>WORK</h2>
                            <h3>All</h3>
                        </div>
                        <div>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                    </div>
                    <hr />
                    <div className={styles.filterItems}>
                        <div>
                            <h2>FABRICS</h2>
                            <h3>All</h3>
                        </div>
                        <div>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                    </div>
                    <hr />
                    <div className={styles.filterItems}>
                        <div>
                            <h2>SEGMENT</h2>
                            <h3>All</h3>
                        </div>
                        <div>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                    </div>
                    <hr />
                    <div className={styles.filterItems}>
                        <div>
                            <h2>SUITABLE FOR</h2>
                            <h3>All</h3>
                        </div>
                        <div>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                    </div>
                    <hr />
                    <div className={styles.filterItems}>
                        <div>
                            <h2>ROW MATERIALS</h2>
                            <h3>All</h3>
                        </div>
                        <div>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                    </div>
                    <hr />
                    <div className={styles.filterItems}>
                        <div>
                            <h2>PATTERN</h2>
                            <h3>All</h3>
                        </div>
                        <div>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                    </div>
                </div>
                }

                <div className={hideFilter ? styles.productscard1 : styles.productscard} >

                    {productDatas.length > 0 &&
                        productDatas.map((product, index) => (
                            <div key={index} className={hideFilter ? styles.productscards1 : styles.productscards}>
                                <div className={styles.productImgWrap}> <img className={styles.productImg} src={product.image} alt="img" /></div>
                                <div className={styles.productName}>
                                    <p>{product.title}</p>

                                </div>
                                <div className={styles.productNameBelow}>
                                    <p>Sign in or Create an account to see pricing</p>
                                    {heartStates[index] ? (
                                        <FaHeart
                                            style={{ color: 'red', cursor: 'pointer' }}
                                            onClick={() => handleHeartClick(index)}
                                        />
                                    ) : (
                                        <FaRegHeart
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => handleHeartClick(index)}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}



                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.footerSec1}>
                    <div className={styles.footerSubSec1}>
                        <div>
                            <div>
                                <h1>BE THE FIRST TO KNOW</h1>
                                <p>Sign up for updates from mettā muse.</p>

                            </div>
                            <div>
                                <input type="text"  className={styles.footerInput} />
                                <button className={styles.footerButton} >SUBSCRIBE</button>
                            </div>
                        </div>
                        <div>
                            <h1>COCNTACT US</h1>
                            <p>+44 221 133 5360</p>
                            <a href="">customercare@mettamuse.com</a>
                            <h2>CURRENCY</h2>
                            <div className={styles.footerFlag}>
                                <h1>flag</h1>
                                <h3>USD</h3>
                            </div>
                            <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                        </div>
                    </div>
                    <hr style={{ color: 'white', width: '100%' }} />

                    <div className={styles.footerSec2}>
                        <div className={styles.footerSubSec2}>
                            <h1>Mettā muse</h1>
                            <a href="">About Us</a>
                            <a href="">Stories</a>
                            <a href="">Artisans</a>
                            <a href="">Boutiques</a>
                            <a href="">Contact Us</a>
                            <a href="">EU Compliances Docs</a>
                        </div>
                        <div className={styles.footerSubSec2}>
                            <h1>QUICK LINKS </h1>
                            <a href="">Orders & Shipping</a>
                            <a href="">Join/Login as a Seller</a>
                            <a href="">Payment & Pricing</a>
                            <a href="">Return & Refunds</a>
                            <a href="">FAQs</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Terms & Conditions</a>
                        </div>
                        <div className={styles.footerSubSec2}>
                            <div className={styles.footerBottom}>
                                <h1>FOLLOW US </h1>
                            <div className={styles.socialDiv}>   

                                <div className={styles.social}><FaInstagram /></div>
                                <div className={styles.social}><FaLinkedinIn /></div>

                            </div>
                            <div>
                                <h2>mettā muse Accepts</h2>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
