import { useEffect, useState } from "react"
import axios from '../axios'
import Loading from "../Loading/loading"


const CategoryList = () => {
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
            <ul className="nav ">
                <li className="nav-item">
                    <a className="nav-link" href="">همه فست فودها</a>
                </li>
                {/* {JSON.stringify(categories)} */}
                {categories?.map((category) => (
                    <li className="nav-item">
                        <a className="nav-link" href="">
                            {/* سلام */}
                            {category.name}
                        </a>
                    </li>)
                )}

            </ul>
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