package com.ccnet.api.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.collections.CollectionUtils;
import org.springframework.stereotype.Repository;

import com.ccnet.api.entity.PayUserOrder;
import com.ccnet.core.common.utils.CPSUtil;
import com.ccnet.core.common.utils.dataconvert.Dto;
import com.ccnet.core.dao.base.BaseDao;
import com.ccnet.core.dao.base.Page;

import cn.ffcs.memory.BeanListHandler;

@Repository("payUserOrderDao")
public class PayUserOrderDao extends BaseDao<PayUserOrder>{

	/**
	 * 保存一个对象
	 * 
	 * @param o
	 *            对象
	 * @return 对象的ID
	 */
	public int insert(PayUserOrder o) {
		int i = super.insert(o, null);
		return i;
	}

	public int insert(PayUserOrder o, String autoIncrementField) {
		int i = super.insert(o, autoIncrementField);
		return i;
	}

	/**
	 * 删除一个对象
	 * 
	 * @param k
	 *            字段值
	 */
	public int delete(PayUserOrder o) {
		int i = super.delete(o);
		return i;
	}

	/**
	 * 更新一个对象
	 * 
	 * @param o
	 *            对象
	 */
	public int update(PayUserOrder o, String camelKey) {
		int i = super.update(o, camelKey);
		return i;
	}

	/**
	 * 批量删除一组对象
	 * 
	 * @param s
	 *            (主键)数组
	 */
	public int[] deleteBatch(List<PayUserOrder> list) {
		if (CollectionUtils.isEmpty(list)) {
			return new int[0];
		}
		int[] i = super.deleteBatch(list);
		return i;
	}
	
	/**
	 * 获得对象列表
	 * 
	 * @param o
	 *            对象
	 * @return List
	 */
	public List<PayUserOrder> findList(PayUserOrder o) {
		List<PayUserOrder> list = super.findList(o);
		return list;
	}

	public PayUserOrder find(PayUserOrder o) {
		PayUserOrder PayUserOrder = super.find(o);
		return PayUserOrder;
	}

	public void findByPage(PayUserOrder o, Page<PayUserOrder> page) {
		super.findByPage(o, page);
	}

	/**
	 * 分页查询用户(多过滤)
	 * 
	 * @param user
	 * @param page
	 * @param pdDto
	 * @return
	 */
	public Page<PayUserOrder> findUserByPage(PayUserOrder user, Page<PayUserOrder> page, Dto pdDto) {
		// 获取参数
		String userID = pdDto.getAsString("userId");
		// 日期过滤
		String end_date = pdDto.getAsString("end_date");
		String start_date = pdDto.getAsString("start_date");

		StringBuffer sql = new StringBuffer();
		List<Object> params = new ArrayList<Object>();
		sql.append("select * from ").append(getCurrentTableName());

		List<String> whereColumns = memory.parseWhereColumns(params, PayUserOrder.class, user);
		if (CollectionUtils.isNotEmpty(whereColumns)) {
			sql.append(" where ").append(appendAnd(whereColumns));
		}

		// 带上日期查询
		if (CPSUtil.isNotEmpty(start_date)) {
			appendWhere(sql);
			sql.append(" and create_date >=? ");
			params.add(start_date + " 00:00:00");
		}

		if (CPSUtil.isNotEmpty(end_date)) {
			appendWhere(sql);
			sql.append(" and create_date <=? ");
			params.add(end_date + " 23:59:59");
		}

		if (CPSUtil.isNotEmpty(userID)) {
			appendWhere(sql);
			sql.append(" and user_id =? ");
			params.add(userID);
		}

		// 加上排序
		sql.append(" order by create_date desc ");
		super.queryPager(sql.toString(), new BeanListHandler<PayUserOrder>(PayUserOrder.class), params, page);
		return page;

	}

	/**
	 * 统计总数
	 * 
	 * @param startDate
	 * @param endDate
	 * @return
	 */
	public int count(Date startDate, Date endDate) {
		StringBuffer sql = new StringBuffer();
		List<Object> params = new ArrayList<Object>();
		sql.append("select count(1) from ").append(getCurrentTableName());
		sql.append(" where 1=1");

		// 带上日期查询
		if (startDate != null) {
			sql.append(" and create_time >=? ");
			params.add(startDate);
		}
		if (endDate != null) {
			sql.append(" and create_time < ? ");
			params.add(endDate);
		}
		return super.count(sql, params);
	}
}
