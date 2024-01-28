import { useEffect, useState } from "react"
import axios from '../axios'
import Loading from "../Loading/loading"


const CategoryList = ({ filterItems, children }) => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchCategory = async () => {
            const response = await axios.get('https://react-mini-projects-api.classbon.com/FoodCategory/categories')
            console.log(response.data)
            setCategories(response.data)
            setLoading(false)
        }
        fetchCategory();
    }, [])

    const renderContent = () => {
        if (loading) {
            return <Loading />
        }
        return (
            <div className="ps-3 w-100 d-flex align-items-center justtify-content-between gap-5">
                <ul className="nav ">
                    <li className="nav-item" onClick={() => filterItems()}>
                        <a className="nav-link" href="">همه فست فودها</a>
                    </li>
                    {/* {JSON.stringify(categories)} */}
                    {categories?.map((category) => (
                        <li className="nav-item"
                            key={category.id}
                            onClick={() => filterItems(category.id)}>
                            <a className="nav-link" href="">
                                {/* سلام */}
                                {category.name}
                            </a>
                        </li>)
                    )}

                </ul>
                {children}
                {/* <SearchBar className="" /> */}
            </div>

        )
    }


    return (
        <nav className="container mt-n5">
            <div className="d-flex align-item-center bg-white rounded-3 shadow-lg py-4" style={{ height: "80px" }}>
                {renderContent()}
            </div>
        </nav>

    )
}

export default CategoryList