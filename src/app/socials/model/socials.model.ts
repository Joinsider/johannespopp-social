class Social {
  name: string;
  url: string;
  description?: string;
  icon?: string;
  icon_link?: string;
  reverse?: boolean;

  constructor(name: string, url: string, description?: string, icon?: string, icon_link?: string, reverse?: boolean) {
    this.name = name;
    this.url = url;
    this.description = description;
    this.icon = icon;
    this.icon_link = icon_link;
    this.reverse = reverse;
  }
}

export { Social };
