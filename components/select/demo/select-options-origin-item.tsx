import { Card, Row, Select, Spin } from 'antd';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';

const initData = [
  {
    customAttr: '雪山之王',
    label: ' 雪豹',
    value: 'snow lepoard',
  },
  {
    customAttr: '森林之王',
    label: '辛巴',
    value: 'senba',
  },
];

async function fetchList(username: string) {
  Promise.resolve([
    {
      customAttr: '天空之王',
      label: '火烈鸟',
      value: 'fire bird',
    },
    {
      customAttr: '深海之王',
      label: '美人鱼',
      value: 'beauty fish',
    },
    {
      customAttr: '自定义',
      label: `${username}`,
      value: 'userName',
    },
  ]);
}
const WrappedSelect = ({ initValues = [], value = [], setValue }) => {
  const [options, setOptions] = useState<Record<string, string>[]>([]);
  const [fetching, setFetching] = useState<boolean>(false);
  useEffect(() => {
    if (initValues?.length) {
      setValue(initValues);
    }
  }, [initValues]);

  const onSearch = useCallback((name: string) => {
    setFetching(true);
    fetchList(name).then((list) => {
      setOptions(list as Record<string, string>[]);
      setFetching(false);
    });
  }, []);

  const selectCallback = (
    newValue: Record<string, string>[],
    selectedList: Record<string, string>[],
  ) => {
    const values = newValue?.map((v) => v.value);
    const newArr = [...selectedList, ...initValues].filter((k) =>
      values.includes(k.value),
    );
    setValue(newArr);
  };

  const valueWidthAllAttrs = value.map((v: any) => ({
    ...v,
    label: `${v.label}(${v.customAttr})${v.value}`,
  }));

  const notFoundContent = fetching ? <Spin size="small" /> : null;

  return (
    <Card>
      {JSON.stringify(value)}
      <Select
        mode="multiple"
        showSearch
        showArrow
        onSearch={onSearch}
        value={valueWidthAllAttrs}
        notFoundContent={notFoundContent}
        options={options}
        onChange={selectCallback}
        style={{ width: 600 }}
      />
    </Card>
  );
};

const SelectOriginOptions = () => {
  const [value, setValue] = useState([]);
  return (
    <WrappedSelect initValues={initData} value={value} setValue={setValue} />
  );
};

export default SelectOriginOptions;

WrappedSelect.propTypes = {
  initValues: PropTypes.array,
  value: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
};
