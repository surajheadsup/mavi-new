import React from 'react'

function PageHeader(props) {
    return (
        <div className={`mediz-page-title-wrap mediz-style-custom mediz-left-align ${props.className}`}>
            <div className="mediz-header-transparent-substitute"></div>
            <div className="mediz-page-title-overlay"></div>
            <div className="mediz-page-title-container mediz-container">
                <div className="mediz-page-title-content mediz-item-pdlr">
                    <h1 className="mediz-page-title">{props.title}</h1>
                    <div className="mediz-page-caption">{props.sub_title}</div>
                </div>
            </div>
        </div>
    )
}

export default PageHeader
