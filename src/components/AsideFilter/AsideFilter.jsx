import Checkbox from '@mui/material/Checkbox';
import FilterSelect from "../FilterSelect/FilterSelect";
import RangeInput from "./RangeInput";
import Button from '@mui/material/Button';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const AsideFilter = ({sort,setSort,category,setCategory,slider,setSlider}) => {
    const colors = ['red','yellow','blue']

    const resetFilter = () => {
        setSort('')
        setCategory('')
        setSlider([0,30000])
    }

    return (
        <aside className='catalog__aside'>
                <div className="catalog__aside-content">
                    <h2 className="catalog__aside-title">Раздел</h2>
                     <FilterSelect title='Категории' state={category} setState={setCategory} array={['Барные стулья', 'Диваны','Двухспальные кровати','Буфеты','Комоды','Журнальные столы','Письменные столы', 'Детские диваны',]}/>
                    <FilterSelect title='Сортировать' state={sort} setState={setSort} array={['asc','desc','rate']}/>
                </div>
            <div className="catalog__aside-content">
                <h2 className="catalog__aside-title">Цена</h2>
                <RangeInput slider={slider} setSlider={setSlider}/>
                <div className="catalog__aside-prices">
                    <div className="catalog__aside-price">
                        ${slider[0]} ₽
                    </div>
                    ---
                    <div className="catalog__aside-price">
                        ${slider[1]} ₽
                    </div>
                </div>
            </div>
            <div className="catalog__aside-content">
                <h2 className="catalog__aside-title">Цвет</h2>
                <div className="catalog__aside-colors">
                    {
                        colors.map((item,idx) => (
                            <div key={idx} className='catalog__aside-color' style={{background: item}}>
                                s
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="catalog__aside-checks">
                <h2 className="catalog__aside-title">Бренд</h2>
                <Checkbox {...label} />
                <Checkbox {...label} />
                <Checkbox {...label} />
            </div>
            <Button onClick={resetFilter} variant="contained">Сбросить</Button>
        </aside>
    );
};

export default AsideFilter;