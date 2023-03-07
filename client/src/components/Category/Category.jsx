import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import "./Category.scss";

const Category = () => {
    const { id } = useParams();
    const { data, isLoading } = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${id}`
    );
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {
                        data?.data?.[0]?.attributes?.categories?.data?.[0]
                            ?.attributes?.title
                    }
                </div>
                <Products innerPage={true} products={data} />
            </div>
        </div>
    );
};

export default Category;
