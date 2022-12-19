import { useParams, useSearchParams } from "react-router-dom";

const CategoryDetailPage = () => {
    let params = useParams();//path of  a url as params

    let [query] = useSearchParams(); // for query 

    return (<>
        {params.slug}
        {query.get('title')}


    </>)
}

export default CategoryDetailPage;