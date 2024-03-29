# Bear React Table

<a href="https://bear-react-table.pages.dev/" title="Bear React Table - CSS Gird Of React Table Design">
    <img src="https://bear-react-table.pages.dev/img/banner.webp" alt="Bear React Table Logo"/>
</a>

<p align="center">
    CSS Gird Of React Table Design
</p>

<div align="center">

[![NPM](https://img.shields.io/npm/v/bear-react-table.svg?style=for-the-badge)](https://www.npmjs.com/package/bear-react-table)
[![npm downloads](https://img.shields.io/npm/dm/bear-react-table.svg?style=for-the-badge)](https://www.npmjs.com/package/bear-react-table)
[![npm](https://img.shields.io/npm/dt/bear-react-table.svg?style=for-the-badge)](https://www.npmjs.com/package/bear-react-table)
[![npm](https://img.shields.io/npm/l/bear-react-table?style=for-the-badge)](https://github.com/imagine10255/bear-react-table/blob/main/LICENSE)

</div>

## Documentation

- [Getting Started](https://bear-react-table.pages.dev/docs/getting-started)
- [Faq](https://bear-react-table.pages.dev/docs/category/faqs)
- [Components](https://bear-react-table.pages.dev/docs/category/components)
- [Features](https://bear-react-table.pages.dev/docs/category/features)


## Installation

```bash
yarn add bear-react-table
```

## Usage

add in your main.tsx
```tst
import 'bear-react-table/dist/index.css';

```

then in your page
```tsx
import {Table} from 'bear-react-table';


const data = [
    {id: 1, text: 'Imagine', avatar: 'https://bear-react-table.pages.dev/img/avatar/female-1.jpg'},
    {id: 1, text: 'Gary', avatar: 'https://bear-react-table.pages.dev/img/avatar/female-2.jpg'},
    {id: 1, text: 'Selin', avatar: 'https://bear-react-table.pages.dev/img/avatar/female-3.jpg'},
    {id: 1, text: 'Amy', avatar: 'https://bear-react-table.pages.dev/img/avatar/female-4.jpg'},
    {id: 1, text: 'Keria', avatar: 'https://bear-react-table.pages.dev/img/avatar/female-5.jpg'},
];

const BaseUsed = () => {
    
    const renderTable = () => {
        return <Table
            title={{
                avatar:   {text: '#',      col: 50,      titleAlign: 'center', dataAlign: 'center'},
                name:     {text: 'Name',   col: 'auto',  isEnableSort: true},
            }}
            data={data.map(row => {
                return {
                    id: row.id,
                    field: {
                        avatar: <Avatar src={row.avatar}/>,
                        name: row.name,
                    },
                };
            })}
        />;
    }
    
    return <div>
        {renderTable()}
    </div>;
};
```


There is also a codesandbox template that you can fork and play with it:

[![Edit react-editext-template](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/bear-react-table-n0s8su?file=/src/App.tsx)


## License

MIT © [imagine10255](https://github.com/imagine10255)
