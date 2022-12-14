import React, {useCallback, useState} from 'react';
import {Table, IPaginateMeta, IPaginateInfo} from 'bear-react-table';
import styled from 'styled-components/macro';
import dayjs from 'dayjs';
import {data, IPaginateData} from '../_components/data';


const getPageData = (currentPage: number, pageLimit: number) => {
    const pageStart = (currentPage -1) * pageLimit;
    return data.slice(pageStart, pageStart + pageLimit );
};


const BaseUsed = () => {


    const [isFetching, setIsFetching] = useState(false);
    const [paginateMeta, setPaginateMeta] = useState<IPaginateMeta>({
        currentPage: 1,
        pageLimit: 8,
        orderField: 'name',
        orderBy: 'DESC',
    });
    const [paginateData, setPaginateData] = useState<IPaginateData[]>(getPageData(paginateMeta.currentPage, paginateMeta.pageLimit));
    const [paginateInfo, setPaginateInfo] = useState<IPaginateInfo>({
        totalItems: data.length,
        totalPages: Math.ceil(data.length / paginateMeta.pageLimit),
    });



    /**
     * 查詢分頁
     */
    const handleFetchPaginate = useCallback((meta: IPaginateMeta) => {
        // 取得查詢項目
        setIsFetching(true);
        setPaginateMeta(meta);

        setTimeout(() => {
            setPaginateData(getPageData(meta.currentPage, meta.pageLimit));
            setIsFetching(false);
        }, 400);
    }, []);



    return (
        <div>
            <Button type="button" color="primary" onClick={() => setIsFetching(curr => !curr)}>isFetching</Button>
            <div className="d-flex flex-row my-2">
                <Table
                    isFetching={isFetching}
                    title={[
                        {text: '#',          field: 'avatar',      col: 60, titleAlign: 'center', dataAlign: 'center'},
                        {text: 'Name',       field: 'name',        col: true, isEnableSort: true},
                        {text: 'Role',       field: 'role',        col: 120},
                        {text: 'Crated',     field: 'createdAt',   col: 110, isEnableSort: true},
                        {text: 'Joined',     field: 'isApplyJoin', col: 80},
                    ]}
                    data={paginateData.map(row => {
                        const createdAt = dayjs(row.createdAt);

                        return {
                            id: row.id,
                            disabled: !row.isJoined,
                            onClickRow: () => console.log(row.id),
                            field: {
                                role: row.role,
                                avatar: <Avatar style={{backgroundImage: `url(${row.avatar})`}}/>,
                                name: <div className="d-flex flex-column">
                                    <div>{row.name}</div>
                                    <div>{row.email}</div>
                                </div>,
                                isApplyJoin: row.isJoined ? '已加入':'等待同意',
                                createdAt: <div style={{fontSize: 12}}>
                                    {createdAt.format('YYYY-MM-DD')}<br/>
                                    {createdAt.format('HH:mm:ss')}
                                </div>,
                            }
                        };
                    })}
                    onChangePage={handleFetchPaginate}
                    paginateMeta={paginateMeta}
                    paginateInfo={paginateInfo}
                />

            </div>




        </div>
    );

};

export default BaseUsed;



const Button = styled.button`
  background-color: rgba(0, 224, 112, 0.8);
  color: #fff;
`;


const Avatar = styled.div`
  display: flex;

  width: 40px;
  height: 40px;
  border-radius: 100%;
  overflow: hidden;
  flex: 0 0 auto;
  border: 2px solid #343a40;
  background: rgb(70, 70, 70) center center;
  background-size: cover;
  align-items: center;
  justify-content: center;
  margin: 0 2.5px;

`;