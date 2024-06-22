import NaverNews from "../news/naver-news/Naver.news";
import { relatedNewsAPI } from "~/apis/RelatedKeyword.js"
import { useQuery } from "react-query";



export default function RelatedNews(props) {
    const { data: relatedNewsData, isLoading: isLoadingNews, error: errorNews } = useQuery(
        "relatednewsData",
        () => relatedNewsAPI(props.params2),
        {
            staleTime: Infinity,
        }
    );

    return (
    <NaverNews data={relatedNewsData} width={"680px"} Hfontsize={"0.8rem"} Cfontsize={"0.7rem"}></NaverNews>
    )
}