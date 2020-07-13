const HASH = '#';
const HEX_REGEX = new RegExp('^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$', 'gm');

export const getColor = (value: string | undefined = '', useFallback = true) => {
  let color = useFallback ? '#ffffff' : undefined;

  const match = value?.match(HEX_REGEX);

  if (match && match?.length) {
    if (value.startsWith(HASH)) {
      color = value;
    } else {
      color = `#${value}`;
    }
  }

  return color;
};
