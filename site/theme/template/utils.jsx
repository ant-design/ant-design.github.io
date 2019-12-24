import flattenDeep from 'lodash/flattenDeep';
import flatten from 'lodash/flatten';

export function getMenuItems(moduleData, locale, categoryOrder, typeOrder) {
  const menuMeta = moduleData.map(item => item.meta).filter(meta => !meta.skip);

  const menuItems = [];
  const sortFn = (a, b) => (a.order || 0) - (b.order || 0);
  menuMeta.sort(sortFn).forEach(meta => {
    // Format
    if (meta.category) {
      meta.category = meta.category[locale] || meta.category;
    }
    if (meta.type) {
      meta.type = meta.type[locale] || meta.type;
    }
    if (meta.title) {
      meta.title = meta.title[locale] || meta.title;
    }

    if (!meta.category) {
      menuItems.push(meta);
      return;
    }

    // Component
    if (meta.category === 'Components' && meta.type) {
      let type = menuItems.find(i => i.title === meta.type);
      if (!type) {
        type = {
          type: 'type',
          title: meta.type,
          children: [],
          order: typeOrder[meta.type],
        };
        menuItems.push(type);
      }
      type.children.push(meta);
      return;
    }

    let group = menuItems.find(i => i.title === meta.category);

    if (!group) {
      group = {
        type: 'category',
        title: meta.category,
        children: [],
        order: categoryOrder[meta.category],
      };
      menuItems.push(group);
    }

    if (meta.type) {
      let type = group.children.filter(i => i.title === meta.type)[0];
      if (!type) {
        type = {
          type: 'type',
          title: meta.type,
          children: [],
          order: typeOrder[meta.type],
        };
        group.children.push(type);
      }
      type.children.push(meta);
    } else {
      group.children.push(meta);
    }
  });

  function nestSort(list) {
    return list.sort(sortFn).map(item => {
      if (item.children) {
        return {
          ...item,
          children: nestSort(item.children),
        };
      }

      return item;
    });
  }

  return nestSort(menuItems);
}

export function isZhCN(pathname) {
  return /-cn\/?$/.test(pathname);
}

export function getLocalizedPathname(path, zhCN) {
  const pathname = path.startsWith('/') ? path : `/${path}`;
  if (!zhCN) {
    // to enUS
    return /\/?index-cn/.test(pathname) ? '/' : pathname.replace('-cn', '');
  }
  if (pathname === '/') {
    return '/index-cn';
  }
  if (pathname.endsWith('/')) {
    return pathname.replace(/\/$/, '-cn/');
  }
  return `${pathname}-cn`;
}

export function ping(callback) {
  // eslint-disable-next-line
  const url =
    'https://private-a' +
    'lipay' +
    'objects.alip' +
    'ay.com/alip' +
    'ay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png';
  const img = new Image();
  let done;
  const finish = status => {
    if (!done) {
      done = true;
      img.src = '';
      callback(status);
    }
  };
  img.onload = () => finish('responded');
  img.onerror = () => finish('error');
  img.src = url;
  return setTimeout(() => finish('timeout'), 1500);
}

export function isLocalStorageNameSupported() {
  const testKey = 'test';
  const storage = window.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

export function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export function getMetaDescription(jml) {
  const COMMON_TAGS = ['h1', 'h2', 'h3', 'p', 'img', 'a', 'code', 'strong'];
  if (!Array.isArray(jml)) return '';
  const paragraph = flattenDeep(
    jml
      .filter(item => {
        if (Array.isArray(item)) {
          const [tag] = item;
          return tag === 'p';
        }
        return false;
      })
      // ['p', ['code', 'aa'], 'bb'] => ['p', 'aabb']
      .map(item => {
        const [tag, ...others] = flatten(item);
        const content = others
          .filter(other => typeof other === 'string' && !COMMON_TAGS.includes(other))
          .join('');
        return [tag, content];
      }),
  ).find(p => p && typeof p === 'string' && !COMMON_TAGS.includes(p));
  return paragraph;
}
