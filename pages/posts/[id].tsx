import Head from 'next/head';
import Layout from '../../components/layout/layout';
import utilStyles from '../../styles/utils.module.css';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date/date';

interface PostProps {
    postData: {
        id: string;
        contentHtml: string;
        [key: string]: any;
    }
}

interface PathParams {
    params: {
        id: string;
    };
}

export default function Post({ postData }: PostProps) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }: PathParams) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    };
}