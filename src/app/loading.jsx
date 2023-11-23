"use client";
import PageWrapper from '@/components/PageWrapper';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loading = () => {
    return (
        <PageWrapper centered>
            <AiOutlineLoading3Quarters className='fill-white animate-spin' size="2.25rem" />
        </PageWrapper>
    )
}

export default Loading;