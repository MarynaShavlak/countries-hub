import { FC, useState, useEffect } from 'react';
import Search from '../Search/Search';
import { Wrap } from './Controls.styled';
import { RegionSelect, RegionOptionProps } from 'components/RegionSelect';
import { ControlsProps } from './Controls.types';

const initialOptions: RegionOptionProps[] = [];

export const Controls: FC<ControlsProps> = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [regions, setRegions] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] =
    useState<RegionOptionProps[]>(initialOptions);

  useEffect(() => {
    onSearch(search, regions);
  }, [search, regions]);

  const handleRegionSelect = (chosenRegions: RegionOptionProps[]) => {
    setSelectedOptions((prevOptions: RegionOptionProps[]) => [
      ...prevOptions,
      ...chosenRegions,
    ]);

    const labels = chosenRegions.map(
      (region: RegionOptionProps) => region.value,
    );
    setRegions(labels);
  };

  return (
    <Wrap>
      <Search search={search} onSearch={setSearch} />
      <RegionSelect onChange={handleRegionSelect} />
    </Wrap>
  );
};
