import FastFoodItem from "../FastFoodItem/FastFoodItem"

const FastFoodList = ({ fastFoodItems }) => {
    console.log(fastFoodItems)
    return (
        <div className="row">
            {fastFoodItems?.map((fastfood) => {
                return (
                    <div className="col-md-4 col-sm-6 mb-grid-gutter" key={fastfood.id}>
                        <FastFoodItem {...fastfood} />
                    </div>
                )
            })}
        </div>
    )
}
export default FastFoodList 
