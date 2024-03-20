import { React, useState } from 'react'
import galleryJson from '../galleryJson.json'
import ImageGal from '../components/ImageGal';
import MyBtn from '../components/MyBtn';
const Gallery = () => {
    const originalArr = galleryJson;
    const [filterArr, setFilterArr] = useState(originalArr);
    const IMAGE_PER_PAGE = 4;
    const [activeBtn, setActiveBtn] = useState(1);
    const [btnNumber, setBtnNumber] = useState(1);
    const [totalPages, setTotalPages] = useState(Math.ceil(originalArr.length / IMAGE_PER_PAGE));
    const [arr, setArr] = useState(originalArr.slice(0, IMAGE_PER_PAGE));

    const createPageBtn = () => {
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(<MyBtn key={i} onEach={onEachBtn} number={i} activeBtn={activeBtn} />
            );
        };
        return buttons;
    };
    const onEachBtn = (pageNum) => {
        const startIndex = (pageNum - 1) * IMAGE_PER_PAGE;
        const endIndex = startIndex + IMAGE_PER_PAGE;
        const tempArr = filterArr.slice(startIndex, endIndex);
        setArr(tempArr);
        setStart(startIndex);
        setActiveBtn(pageNum);
        setBtnNumber(pageNum);
    };
    const [start, setStart] = useState(0);
    const onNextBtn = () => {
        const startIndex = start + IMAGE_PER_PAGE;
        const tempArr = filterArr.slice(startIndex, startIndex + IMAGE_PER_PAGE);
        setArr(tempArr);
        setStart(startIndex);
        setActiveBtn(btnNumber + 1);
        setBtnNumber(btnNumber + 1);
    };
    const onBackBtn = () => {
        const startIndex = start - IMAGE_PER_PAGE;
        const tempArr = filterArr.slice(startIndex, startIndex + IMAGE_PER_PAGE);
        setArr(tempArr);
        setStart(startIndex);
        setActiveBtn(btnNumber - 1);
        setBtnNumber(btnNumber - 1);
    };
    const createAllCars = (arr) => {
        const compsArr = arr.map((item) => {
            return <ImageGal
                key={item.id}
                src={item.src}
                alt={item.alt}
                value={item.tytle} />

        });
        return compsArr;
    };
    const [searchValue, setSearchValue] = useState("");
    const [choice, setChoice] = useState("alt");
    const filterArray = () => {
        let newArray = galleryJson.filter((item) => {
            if (choice == "alt") {
                return item.alt.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
            }
            if (choice == "value") {
                return item.value.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
            }
        })
        return newArray;
    }
    const hendleSubmit = (e) => {
        e.preventDefault();
        const filterArr = filterArray();
        if (filterArr.length > 0) {
            setArr(filterArr.slice(0, IMAGE_PER_PAGE));
            setFilterArr(filterArr);
            setTotalPages(Math.ceil(filterArr.length /
                IMAGE_PER_PAGE));

        } else {
            alert("Try again");
            setArr(originalArr.slice(0, IMAGE_PER_PAGE));
            setFilterArr(originalArr);
            setTotalPages(Math.ceil(originalArr.length /
                IMAGE_PER_PAGE));
        }
    }
    return (
        <div>
            <main className="container-fluid">
                <div className="container text-center">
                    <form onSubmit={hendleSubmit} className="p-4 d-flex justify-content-center">
                        <input onChange={(e) => setSearchValue(e.target.value)} type="text" className="w-50  form-control" placeholder="Search of Video" />
                        <select className="m-2 rounded rounded-3 col-1" onChange={(e) => setChoice(e.target.value)}>
                            <option value="alt">Alt</option>
                            <option value="value">Title</option>
                        </select>
                        <button className="btn btn-danger">Search by video</button>
                    </form>
                    <div className="container mt-4 mb-4">
                        <div className="row justify-content-evenly">
                            {createAllCars(arr)}
                            <nav className="d-flex justify-content-center mt-3" aria-label="...">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <button className="page-link btn bg-danger text-light m-2" onClick={onBackBtn} disabled={start === 0}>
                                            Back
                                        </button>
                                    </li>
                                    {createPageBtn()}
                                    <li className="page-item">
                                        <button className="page-link btn bg-danger text-light m-2" onClick={onNextBtn} disabled={start + IMAGE_PER_PAGE >= filterArr.length}>
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default Gallery