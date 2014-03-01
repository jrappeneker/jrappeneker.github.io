#! /usr/bin/python

import os

directory_flag = 1
file_flag = 2

media_files = os.walk('./media').next()[directory_flag]
post_files = os.walk('./_posts').next()[file_flag]

for directory in media_files:
    filename = directory+'.md'
    if (post_files.count(filename) == 0):
        f = open('_posts/'+filename,'w')
        f.write('---\nlayout: post\ntitle: \nquote: \nimage: '''+'/media/'+directory+'/cover.jpg\nvideo: false\n---\n');
        f.close()
