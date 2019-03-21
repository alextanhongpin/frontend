## Guideline

It is usually good to refer to existing pattern libraries or design system. Use the bare components if possible before attempting to create a custom one.

Pattern libraries:
- [semantic ui](https://react.semantic-ui.com/elements/button/
- [antd](https://ant.design/)


Design System:
- [lexicon](https://lexicondesign.io/)
- [ibm carbon](https://www.carbondesignsystem.com/)

A more comprehensive list here:
- https://github.com/alexpate/awesome-design-systems


## Designing with text

Remove any UI aspect from the page first - start with text. If you can represent your page as a text-based and still be able to convey the information, it would be good enough. Some visuals can be a distraction - keep it to the bare minimum. Also, remove unnecessary visuals, not the data representation. Often times designer tends to remove the useful information just because "it doesn't fit the UI".


## Layouts

Layout matters a lot - how the overall screen (page) will look like depends on how you place your components. Components are designed individually, but what really matters is the symbiosis between different components.

- https://www.uxpin.com/studio/blog/web-layout-best-practices-12-timeless-ui-patterns-explained/

## Aggregation

Aggregation is common in components. Most of the time we will have a list of items to display, and when the list gets huge, the design gets messy.

There are several ways to deal with large lists:
- paginate them 
- sort them
- filter only relevant content
- break them into different pages/tabs

## Relationships between components

Components can have different responsibility:
- as a trigger (button, filter, sort action, etc)
- as a read-only static view (title, paragraph, no interaction required)
- as a read-only dynamic view (counters, time display etc)
- as a list (feeds etc)
