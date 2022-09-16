import React from 'react'
import { PageNotFoundContiner, PageNotFoundDesc, PageNotFoundImg ,PageNotFoundTitle, TravelHomeButton } from './PageNotFound.elems'
import PageNotFoundImgImport from "../assets/404-Error-img.png"

export default function PageNotFound() {
  return (
    <PageNotFoundContiner>
        <PageNotFoundImg src={PageNotFoundImgImport} />
        <PageNotFoundTitle>Page Not Found</PageNotFoundTitle>
        <PageNotFoundDesc>The page you're looking for might be renamed, removed, or might never exist on this planet</PageNotFoundDesc>
        <TravelHomeButton onClick={() => window.location.href="/"}>Travel Back Home</TravelHomeButton>
    </PageNotFoundContiner>
  )
}
